import React, { useState } from 'react';
import { siteContent } from '../data/content';
import Hero from '../components/cards/Hero';

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

    return (
        <div className="overflow-hidden">
            <Hero compact eyebrow="Get in touch" title="Let's create change together" subtitle="Talk with our team about partnerships, programs, support, or opportunities to collaborate." />
            <section className="page-section-white pt-32 md:pt-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-intro mb-12 animate-slide-up">
                        <span className="section-eyebrow">Contact</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900">
                            We’re here to help
                        </h2>
                        <p className="text-lg text-secondary-600">
                            Reach out for partnerships, donations, media inquiries, or general support.
                        </p>
                    </div>

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
                </div>
            </section>

            <section id="contact-form" className="page-section-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="form-surface">
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
                                    className={`btn-primary w-full py-4 px-6 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
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
        </div>
    );
};

export default Contact;

