import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbcon';
import User from '@/schema/userschema';
import crypto from 'crypto';
import { Resend } from 'resend';
import OtpEmail from '@/emails/OtpEmail';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        if (user.isVerified) {
            return NextResponse.json({ message: 'User is already verified' }, { status: 400 });
        }

        // Generate new OTP
        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 2 * 60 * 1000); // 2 mins from now

        user.otp = otp;
        user.otpExpiry = otpExpiry;
        await user.save();

        // Initialize Resend inside the handler
        const resend = new Resend(process.env.RESEND_API);

        // Send Email via Resend
        try {
            await resend.emails.send({
                from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
                to: email,
                subject: 'Bluora - New OTP Request',
                react: OtpEmail({ validationCode: otp }),
            });
        } catch (emailError) {
            console.error("Resend Email Failed:", emailError);
            // We continue to return 200
        }

        return NextResponse.json({ message: 'New OTP sent verified.' }, { status: 200 });

    } catch (error) {
        console.error("Resend OTP Error:", error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
