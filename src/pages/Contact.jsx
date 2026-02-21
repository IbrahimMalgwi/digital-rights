import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        department: 'general'
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                success: true,
                message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.'
            });
            setIsSubmitting(false);

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                department: 'general'
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ submitted: false, success: false, message: '' });
            }, 5000);
        }, 1500);
    };

    // Contact methods with icons and details
    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Us',
            info: siteContent.site.email,
            description: 'We\'ll respond within 24 hours',
            action: `mailto:${siteContent.site.email}`,
            buttonText: 'Send Email',
            color: 'from-amber-500 to-amber-600'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Call Us',
            info: siteContent.site.phone,
            description: 'Mon-Fri, 9AM-5PM GMT',
            action: `tel:${siteContent.site.phone}`,
            buttonText: 'Call Now',
            color: 'from-emerald-500 to-emerald-600'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Visit Us',
            info: siteContent.site.address,
            description: 'Headquarters location',
            action: 'https://maps.google.com',
            buttonText: 'Get Directions',
            color: 'from-indigo-500 to-indigo-600'
        }
    ];

    // Department options
    const departments = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'partnerships', label: 'Partnerships' },
        { value: 'donations', label: 'Donations' },
        { value: 'media', label: 'Media & Press' },
        { value: 'research', label: 'Research Collaboration' },
        { value: 'volunteer', label: 'Volunteer Opportunities' }
    ];

    // FAQ data
    const faqs = [
        {
            question: "How quickly do you respond?",
            answer: "We aim to respond to all inquiries within 24-48 business hours."
        },
        {
            question: "Do you accept partnerships?",
            answer: "Yes! Please select 'Partnerships' in the department dropdown."
        },
        {
            question: "Can I volunteer?",
            answer: "Absolutely! Select 'Volunteer Opportunities' in the department dropdown."
        }
    ];

    return (
        <div>
            {/* Hero Section - Bold & Graphic (matching other pages) */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20 pb-32 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-20 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-2 text-sm mb-8">
                            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">→</span>
                            <span className="text-gray-900 font-medium">Contact</span>
                        </div>

                        <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm mb-8">
                            ✦ Get in Touch
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Contact{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Us
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mb-12">
                            Get in touch with our team. We'd love to hear from you.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact-form"
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Send a message
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section - Simple Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{method.info}</p>
                                <p className="text-xs text-gray-400 mb-4">{method.description}</p>
                                <a
                                    href={method.action}
                                    className="text-sm text-gray-900 font-medium hover:text-gray-700 flex items-center"
                                >
                                    {method.buttonText}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section id="contact-form" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        Send us a message
                                    </h2>
                                    <p className="text-gray-500">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                {/* Success Message */}
                                {formStatus.submitted && formStatus.success && (
                                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-emerald-700 text-sm">{formStatus.message}</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name and Email Row */}
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Department Selection */}
                                    <div>
                                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                                            Department
                                        </label>
                                        <select
                                            id="department"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                                        >
                                            {departments.map((dept) => (
                                                <option key={dept.value} value={dept.value}>
                                                    {dept.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`
                                            w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium
                                            transition-all hover:bg-gray-800
                                            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                                        `}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </div>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-5">
                            {/* Quick Response Card */}
                            <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-semibold mb-3">Quick Response</h3>
                                <p className="text-white/80 text-sm mb-4">
                                    We typically respond within 24 hours during business days.
                                </p>
                                <div className="flex items-center">
                                    <div className="flex -space-x-2 mr-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-white/80">Team online</span>
                                </div>
                            </div>

                            {/* FAQ Card */}
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs</h3>
                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                            <p className="font-medium text-gray-900 text-sm mb-1">{faq.question}</p>
                                            <p className="text-xs text-gray-500">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links Card */}
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h3>
                                <div className="flex gap-3">
                                    {Object.entries(siteContent.site.social).map(([platform, url]) => (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
                                        >
                                            <span className="font-medium text-sm uppercase">{platform[0]}</span>
                                        </a>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-3">
                                    Follow us for updates and news
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section - Simplified */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Find us here
                        </h2>
                        <p className="text-gray-500">
                            Visit our headquarters or reach out to our regional offices
                        </p>
                    </div>

                    <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-emerald-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-5xl mb-3">🗺️</div>
                                <p className="text-gray-700 font-medium">{siteContent.site.address}</p>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-4">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Hours - Simple Grid */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl mb-2">⏰</div>
                            <h3 className="font-semibold text-gray-900 mb-1">Monday - Friday</h3>
                            <p className="text-sm text-gray-500">9:00 AM - 5:00 PM GMT</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">📞</div>
                            <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                            <p className="text-sm text-gray-500">Same day response</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">✉️</div>
                            <h3 className="font-semibold text-gray-900 mb-1">Email Response</h3>
                            <p className="text-sm text-gray-500">Within 24 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;