'use client';

import React, { useState, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Droplets } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        // Validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.subject ||
            !formData.message
        ) {
            alert("Please fill in all fields");
            return;
        }

        // Create WhatsApp message
        const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;

        // Send to WhatsApp
        window.open(`https://wa.me/916239190187?text=${whatsappMessage}`, "_blank");

        // Show success message
        setIsSubmitted(true);

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    const handleWhatsAppClick = () => {
        window.open(
            "https://wa.me/916239190187?text=Hi, I would like to know more about Bluora water products",
            "_blank"
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 py-16">
                <div className="container mx-auto px-6">
                    {/* Brand Logo - Links to Homepage */}
                    <a href="/" className="inline-flex items-center gap-3 group mb-8">
                        <div className="bg-white/20 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                            <Droplets size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold text-white tracking-tight">
                                Bluora<span className="text-cyan-200">™</span>
                            </span>
                            <span className="text-[9px] text-sky-100 uppercase tracking-widest mt-0.5">
                                The Power of Pure
                            </span>
                        </div>
                    </a>

                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-sky-100">
                            We&apos;d love to hear from you. Reach out to us anytime!
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our products or services? Feel free to
                                contact us through any of the following channels.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-sky-600">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-sky-100 p-3 rounded-lg">
                                        <MapPin className="text-sky-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">
                                            Our Address
                                        </h3>
                                        <p className="text-gray-600">
                                            HD DRINKS & BEVERAGES
                                            <br />
                                            Arazi No. 453, Sachendi, Kanpur Nagar,
                                            <br />
                                            Uttar Pradesh - 209304
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-600">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Phone className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">
                                            Phone Number
                                        </h3>
                                        <a
                                            href="tel:+916239190187"
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            +91 6239 190187
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-sky-600">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-sky-100 p-3 rounded-lg">
                                        <Mail className="text-sky-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">
                                            Email Address
                                        </h3>
                                        <a
                                            href="mailto:Info@hddrinksbeverages.com"
                                            className="text-sky-600 hover:text-sky-700 font-medium"
                                        >
                                            Info@hddrinksbeverages.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-600">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Clock className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">
                                            Business Hours
                                        </h3>
                                        <p className="text-gray-600">
                                            Monday - Saturday: 9:00 AM - 6:00 PM
                                            <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* License Info */}
                            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border-2 border-sky-200">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">FSSAI License:</span>{" "}
                                    12724999000167
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Send Us A Message
                        </h2>

                        {isSubmitted && (
                            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded animate-fadeIn">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg
                                            className="h-5 w-5 text-green-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-green-800">
                                            Thank you! We&apos;ll contact you soon.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-600 focus:outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-600 focus:outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-600 focus:outline-none transition-colors"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-600 focus:outline-none transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-600 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r cursor-pointer from-sky-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed WhatsApp Button */}
            <button
                onClick={handleWhatsAppClick}
                className="fixed bottom-6 right-6 bg-green-500 cursor-pointer text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} className="animate-pulse" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-ping"></span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    1
                </span>
            </button>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
        </div>
    );
};

export default ContactPage;
