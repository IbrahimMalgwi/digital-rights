import React, { useState } from 'react';
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

    // Contact methods – updated colors and icons
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
            color: 'from-accent-500 to-accent-600'
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
            color: 'from-secondary-600 to-secondary-700'
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
        <div className="overflow-hidden">
            {/* Contact Methods Section */}
            <section className="page-section-white pt-32 md:pt-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="icon-card animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-14 h-14 mx-auto bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-soft`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-secondary-900 mb-1">{method.title}</h3>
                                <p className="text-sm text-secondary-600 mb-2 break-all">{method.info}</p>
                                <p className="text-xs text-secondary-400 mb-4">{method.description}</p>
                                <a
                                    href={method.action}
                                    className="text-sm text-primary-600 font-medium hover:text-primary-700 flex items-center justify-center group/link"
                                >
                                    {method.buttonText}
                                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center max-w-2xl mx-auto mt-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">How to reach us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            Get in touch
                        </h2>
                    </div>
                </div>
            </section>

            {/* Main Contact Section (Form) */}
            <section id="contact-form" className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Send a message</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            Let's talk
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="form-surface">
                            {/* Success Message */}
                            {formStatus.submitted && formStatus.success && (
                                <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-xl animate-fade-in">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-primary-700 text-sm">{formStatus.message}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Department
                                    </label>
                                    <select
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="input bg-white"
                                    >
                                        {departments.map((dept) => (
                                            <option key={dept.value} value={dept.value}>
                                                {dept.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="What is this regarding?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input resize-none"
                                        placeholder="Tell us about your inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`
                                        btn-primary w-full py-4 px-6
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
            <section className="page-section-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="card-hover p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3 className="font-semibold text-secondary-900 mb-2">{faq.question}</h3>
                                <p className="text-secondary-500 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                        <div className="visual-panel bg-gradient-to-br from-primary-500 to-accent-500 p-6 text-white md:col-span-2">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Still have questions?</h3>
                                    <p className="text-white/80 text-sm">We're here to help you.</p>
                                </div>
                                <a
                                    href="#contact-form"
                                    className="btn-secondary px-6 py-3 text-sm"
                                >
                                    Contact support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Location</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                            Find us here
                        </h2>
                        <p className="text-secondary-500">
                            Visit our headquarters or reach out to our regional offices
                        </p>
                    </div>

                    <div className="visual-panel relative h-96 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 max-w-5xl mx-auto">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="card p-8 text-center">
                                <div className="text-5xl mb-3">📍</div>
                                <p className="text-secondary-900 font-medium text-lg">{siteContent.site.address}</p>
                                <p className="text-secondary-500 text-sm mt-2">{siteContent.site.fullName}</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center mt-4 px-6 py-3 text-sm"
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
            <section className="page-section-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
                        <span className="text-secondary-400 font-medium mb-4 block tracking-wide">Hours</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            When to reach us
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="icon-card animate-fade-in">
                            <div className="text-4xl mb-3">🕒</div>
                            <h3 className="font-semibold text-secondary-900 mb-2">Monday - Friday</h3>
                            <p className="text-secondary-500">9:00 AM - 5:00 PM GMT</p>
                        </div>
                        <div className="icon-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="text-4xl mb-3">📞</div>
                            <h3 className="font-semibold text-secondary-900 mb-2">Phone Support</h3>
                            <p className="text-secondary-500">Same day response</p>
                        </div>
                        <div className="icon-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="text-4xl mb-3">✉️</div>
                            <h3 className="font-semibold text-secondary-900 mb-2">Email Response</h3>
                            <p className="text-secondary-500">Within 24 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

