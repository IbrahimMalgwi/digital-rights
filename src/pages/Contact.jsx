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
            {/* Hero Section - Spacious & Centered */}
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-emerald-50 min-h-[90vh] flex items-center py-32 lg:py-40 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/20 to-emerald-100/20 rounded-full filter blur-3xl opacity-20"></div>

                {/* Additional subtle decorative elements */}
                <div className="absolute top-60 left-10 w-32 h-32 border-4 border-amber-200/30 rounded-full"></div>
                <div className="absolute bottom-60 right-10 w-40 h-40 border-4 border-emerald-200/30 rounded-full"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumbs - Centered */}
                        <nav className="flex items-center justify-center space-x-2 text-sm mb-8 text-gray-500">
                            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 font-medium">Contact</span>
                        </nav>

                        {/* Badge - Centered */}
                        <div className="inline-flex items-center justify-center mb-12">
                            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-amber-100">
                                ✦ Get in Touch
                            </span>
                        </div>

                        {/* Main Title - Centered with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            <span className="block mb-4">Contact</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600">
                                Us
                            </span>
                        </h1>

                        {/* Subtitle - Centered */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
                            Get in touch with our team. We'd love to hear from you.
                        </p>

                        {/* CTA Button - Centered */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#contact-form"
                                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                Send a message
                                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                            </a>
                        </div>

                        {/* Scroll indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                            <div className="flex flex-col items-center space-y-2 text-gray-400">
                                <span className="text-xs uppercase tracking-wider">Scroll</span>
                                <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                                    <div className="w-1 h-2 bg-gradient-to-b from-amber-500 to-emerald-500 rounded-full mt-2 animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Quick overview */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-gray-900">24/7</div>
                            <div className="text-sm text-gray-500">Support Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">24h</div>
                            <div className="text-sm text-gray-500">Response Time</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">15+</div>
                            <div className="text-sm text-gray-500">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">6</div>
                            <div className="text-sm text-gray-500">Departments</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">How to reach us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Get in touch
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all text-center"
                            >
                                <div className={`w-14 h-14 mx-auto bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                                <p className="text-sm text-gray-600 mb-2 break-all">{method.info}</p>
                                <p className="text-xs text-gray-400 mb-4">{method.description}</p>
                                <a
                                    href={method.action}
                                    className="text-sm text-amber-600 font-medium hover:text-amber-700 flex items-center justify-center"
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
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Send a message</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Let's talk
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
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

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Department Selection */}
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                                        Department
                                    </label>
                                    <select
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
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
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="What is this regarding?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                                        placeholder="Tell us about your inquiry..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`
                                        w-full bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-4 px-6 rounded-lg font-medium
                                        transition-all hover:from-amber-700 hover:to-emerald-700 hover:scale-105
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
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-500 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                        <div className="bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl p-6 text-white md:col-span-2">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Still have questions?</h3>
                                    <p className="text-white/80 text-sm">We're here to help you.</p>
                                </div>
                                <a
                                    href="#contact-form"
                                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105"
                                >
                                    Contact support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-gray-400 font-medium mb-4 block">Location</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Find us here
                        </h2>
                        <p className="text-gray-500">
                            Visit our headquarters or reach out to our regional offices
                        </p>
                    </div>

                    <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-emerald-100 max-w-5xl mx-auto">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                                <div className="text-5xl mb-3">📍</div>
                                <p className="text-gray-900 font-medium text-lg">{siteContent.site.address}</p>
                                <p className="text-gray-500 text-sm mt-2">{siteContent.site.fullName}</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-4 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105"
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
                </div>
            </section>

            {/* Office Hours */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-gray-400 font-medium mb-4 block">Hours</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            When to reach us
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center p-6 bg-gray-50 rounded-2xl">
                            <div className="text-4xl mb-3">⏰</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Monday - Friday</h3>
                            <p className="text-gray-500">9:00 AM - 5:00 PM GMT</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-2xl">
                            <div className="text-4xl mb-3">📞</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                            <p className="text-gray-500">Same day response</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-2xl">
                            <div className="text-4xl mb-3">✉️</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Email Response</h3>
                            <p className="text-gray-500">Within 24 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;