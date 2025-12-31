import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbcon';
import User from '@/schema/userschema';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { Resend } from 'resend';
import OtpEmail from '@/emails/OtpEmail';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 2 * 60 * 1000); // 2 mins

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            otp,
            otpExpiry,
        });

        await newUser.save();

        // Send Email via Resend
        console.log("Attempting to send email...");
        console.log("FROM:", process.env.EMAIL_FROM || 'onboarding@resend.dev');
        console.log("TO:", email);
        console.log("API Key Present:", !!process.env.RESEND_API);

        const resend = new Resend(process.env.RESEND_API);
        try {
            const data = await resend.emails.send({
                from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
                to: email,
                subject: 'Bluora - Verify your email',
                react: OtpEmail({ validationCode: otp }),
            });
            console.log("Email sent successfully:", data);
        } catch (emailError) {
            console.error("Resend Email Failed:", emailError);
        }

        return NextResponse.json({ message: 'User registered. OTP sent.' }, { status: 201 });

    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
