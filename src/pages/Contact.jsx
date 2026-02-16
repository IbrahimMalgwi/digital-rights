import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
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
            color: 'from-primary-500 to-primary-600'
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
            color: 'from-green-500 to-emerald-600'
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
            color: 'from-purple-500 to-pink-600'
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
            question: "How quickly do you respond to inquiries?",
            answer: "We aim to respond to all inquiries within 24-48 business hours."
        },
        {
            question: "Do you accept partnership proposals?",
            answer: "Yes! We're always open to meaningful partnerships. Please use the form and select 'Partnerships' as the department."
        },
        {
            question: "Can I volunteer with WDFA?",
            answer: "Absolutely! We have various volunteer opportunities. Select 'Volunteer Opportunities' in the department dropdown."
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Header */}
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch with our team. We'd love to hear from you."
                background="primary"
                size="default"
                pattern={true}
                breadcrumbs={true}
            />

            {/* Contact Methods Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 card-hover border border-gray-100 text-center"
                            >
                                {/* Icon */}
                                <div className={`relative mb-6 inline-block`}>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                    <div className={`relative w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        {method.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-primary-600 font-medium mb-2">
                                    {method.info}
                                </p>
                                <p className="text-secondary-500 text-sm mb-6">
                                    {method.description}
                                </p>

                                {/* Action Button */}
                                <a
                                    href={method.action}
                                    className={`inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/btn`}
                                >
                                    {method.buttonText}
                                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Form - Takes 3 columns */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                                        Send us a <span className="gradient-text">Message</span>
                                    </h2>
                                    <p className="text-secondary-600">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>

                                {/* Success Message */}
                                {formStatus.submitted && formStatus.success && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-green-700">{formStatus.message}</p>
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
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell us about your inquiry..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`
                                            w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-6 rounded-xl font-semibold
                                            transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-large
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
                        <div className="lg:col-span-2 space-y-6">
                            {/* Quick Response Card */}
                            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <span className="w-1 h-6 bg-white rounded-full mr-3"></span>
                                    Quick Response
                                </h3>
                                <p className="text-primary-100 mb-6">
                                    We typically respond within 24 hours during business days.
                                </p>
                                <div className="flex items-center space-x-2 text-sm">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-primary-200">Team online</span>
                                </div>
                            </div>

                            {/* FAQ Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-1 h-6 bg-accent-600 rounded-full mr-3"></span>
                                    Frequently Asked
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                            <button className="flex items-start justify-between w-full text-left">
                                                <span className="font-medium text-gray-900 hover:text-primary-600 transition-colors">
                                                    {faq.question}
                                                </span>
                                                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <p className="text-sm text-secondary-600 mt-2">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links Card */}
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Connect With Us
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {Object.entries(siteContent.site.social).map(([platform, url]) => (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative"
                                        >
                                            <div className="absolute inset-0 bg-primary-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                            <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 shadow-soft border border-gray-200">
                                                <span className="font-semibold text-lg uppercase">
                                                    {platform[0]}
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <p className="text-sm text-secondary-500 mt-4">
                                    Follow us on social media for updates and news
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Find Us <span className="gradient-text">Here</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            Visit our headquarters or reach out to our regional offices
                        </p>
                    </div>

                    <div className="relative h-96 rounded-3xl overflow-hidden shadow-large">
                        {/* Placeholder for Google Maps - Replace with actual embed */}
                        <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🗺️</div>
                                <p className="text-primary-600 font-semibold">Interactive Map</p>
                                <p className="text-secondary-500 text-sm mt-2">
                                    {siteContent.site.address}
                                </p>
                            </div>
                        </div>

                        {/* Overlay with location button */}
                        <div className="absolute bottom-6 left-6">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-white rounded-xl shadow-soft font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Hours Section */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Monday - Friday</h3>
                            <p className="text-secondary-600">9:00 AM - 5:00 PM GMT</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Phone Support</h3>
                            <p className="text-secondary-600">Same day response for urgent matters</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Email Response</h3>
                            <p className="text-secondary-600">Within 24 business hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;