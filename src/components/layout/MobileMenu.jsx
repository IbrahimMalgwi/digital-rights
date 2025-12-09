import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const MobileMenu = ({ isOpen, onClose }) => {
    const [activeDropdown, setActiveDropdown] = useState('projects');
    const [nestedDropdown, setNestedDropdown] = useState(null);

    // Define dropdown items (same as in Header component)
    const projectItems = [
        { name: 'All Projects', href: '/projects' },
        {
            name: 'WDFA',
            href: '/wdfa',
            subItems: [
                { name: 'About WDFA', href: '/wdfa' },
                { name: 'Programs', href: '/wdfa#programs' },
                { name: 'AI Literacy Program', href: '/wdfa#ai-program' },
                { name: 'Get Involved', href: '/wdfa#involved' }
            ]
        },
        {
            name: 'Data Workers Inquiry',
            href: '/data-workers-inquiry',
            subItems: [
                { name: 'About the Inquiry', href: '/data-workers-inquiry' },
                { name: 'Research Methodology', href: '/data-workers-inquiry#methodology' },
                { name: 'Regional Inquiries', href: '/data-workers-inquiry#inquiries' },
                { name: 'Events & Webinars', href: '/data-workers-inquiry#events' },
                { name: 'Mental Health Intervention', href: '/data-workers-inquiry#mental-health' }
            ]
        },
        ...siteContent.projects
            .filter(project => project.featured && project.id !== 7 && project.id !== 8)
            .slice(0, 3)
            .map(project => ({
                name: project.title,
                href: `/projects/${project.id}`
            }))
    ];

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
        setNestedDropdown(null); // Close nested dropdown when toggling main
    };

    const toggleNestedDropdown = (dropdown) => {
        setNestedDropdown(nestedDropdown === dropdown ? null : dropdown);
    };

    // Filter navigation for mobile
    const filteredNavigation = siteContent.navigation.filter(item =>
        ['Home', 'About', 'Projects', 'Team', 'Partners', 'Blog', 'Gallery', 'Contact'].includes(item.name)
    );

    return (
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
            <div className="space-y-2">
                {filteredNavigation.map((item) => {
                    if (item.name === 'Projects') {
                        return (
                            <div key={item.name} className="border-b border-gray-100">
                                <button
                                    onClick={() => toggleDropdown('projects')}
                                    className="w-full flex justify-between items-center text-gray-600 hover:text-primary-600 font-medium py-3 px-2 transition-colors"
                                >
                                    <span>{item.name}</span>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'projects' ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Projects dropdown content */}
                                <div className={`transition-all duration-300 overflow-hidden ${activeDropdown === 'projects' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 space-y-1 py-2 border-l-2 border-primary-100">
                                        {projectItems.map((subItem) => (
                                            <div key={subItem.name}>
                                                {subItem.subItems ? (
                                                    // Item with nested dropdown
                                                    <>
                                                        <button
                                                            onClick={() => toggleNestedDropdown(subItem.name)}
                                                            className="w-full flex justify-between items-center py-2 px-4 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                                                        >
                                                            <span>{subItem.name}</span>
                                                            <svg
                                                                className={`w-4 h-4 transition-transform duration-300 ${nestedDropdown === subItem.name ? 'rotate-90' : ''}`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                        {/* Nested dropdown */}
                                                        <div className={`transition-all duration-300 overflow-hidden ${nestedDropdown === subItem.name ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                            <div className="ml-4 space-y-1 py-2 border-l-2 border-primary-50">
                                                                {subItem.subItems.map((nestedItem) => (
                                                                    <Link
                                                                        key={nestedItem.name}
                                                                        to={nestedItem.href}
                                                                        className="block py-2 px-4 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                                                                        onClick={onClose}
                                                                    >
                                                                        {nestedItem.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    // Regular dropdown item
                                                    <Link
                                                        to={subItem.href}
                                                        className="block py-2 px-4 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                                                        onClick={onClose}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    // Regular navigation items
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="block text-gray-600 hover:text-primary-600 font-medium py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={onClose}
                        >
                            {item.name}
                        </Link>
                    );
                })}

                {/* Donate Button */}
                <Link
                    to="/donate"
                    className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center mt-4"
                    onClick={onClose}
                >
                    Donate
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;