import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('projects'); // Set Projects as default open
    const [nestedDropdown, setNestedDropdown] = useState(null);

    // Define dropdown items for Projects
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
        // Add other featured projects
        ...siteContent.projects
            .filter(project => project.featured && project.id !== 7 && project.id !== 8)
            .slice(0, 3)
            .map(project => ({
                name: project.title,
                href: `/projects/${project.id}`
            }))
    ];

    const toggleProjectsDropdown = () => {
        setActiveDropdown(activeDropdown === 'projects' ? null : 'projects');
        setNestedDropdown(null); // Close nested when toggling main
    };

    const toggleNestedDropdown = (itemName) => {
        setNestedDropdown(nestedDropdown === itemName ? null : itemName);
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null);
        setNestedDropdown(null);
    };

    // Filter navigation to only show specific items
    const filteredNavigation = siteContent.navigation.filter(item =>
        ['Home', 'About', 'Projects', 'Team', 'Partners', 'Blog', 'Gallery', 'Contact'].includes(item.name)
    );

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo with Image */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3" onClick={closeAllDropdowns}>
                            {/* Logo Image */}
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img
                                    src="/images/logo.png"
                                    alt="DRMHI Africa Logo"
                                    className="h-10 w-auto object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `
                                            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                D
                                            </div>
                                        `;
                                    }}
                                />
                            </div>
                            {/* Logo Text */}
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-800 leading-tight">
                                    {siteContent.site.name}
                                </span>
                                <span className="text-xs text-gray-500 font-medium">
                                    Digital Rights & Mental Health
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {filteredNavigation.map((item) => {
                            if (item.name === 'Projects') {
                                return (
                                    <div key={item.name} className="relative">
                                        <button
                                            onClick={toggleProjectsDropdown}
                                            className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 flex items-center space-x-1"
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

                                        {/* Dropdown Menu */}
                                        {activeDropdown === 'projects' && (
                                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fadeIn">
                                                <div className="py-2">
                                                    {projectItems.map((subItem) => (
                                                        <div key={subItem.name} className="relative">
                                                            {subItem.subItems ? (
                                                                // Item with nested dropdown
                                                                <>
                                                                    <div className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
                                                                         onClick={() => toggleNestedDropdown(subItem.name)}>
                                                                        <span className="font-medium">{subItem.name}</span>
                                                                        <svg
                                                                            className={`w-4 h-4 transition-transform duration-300 ${nestedDropdown === subItem.name ? 'rotate-90' : ''}`}
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    </div>
                                                                    {/* Nested dropdown */}
                                                                    {nestedDropdown === subItem.name && (
                                                                        <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fadeIn">
                                                                            <div className="py-2">
                                                                                {subItem.subItems.map((nestedItem) => (
                                                                                    <Link
                                                                                        key={nestedItem.name}
                                                                                        to={nestedItem.href}
                                                                                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                                                                                        onClick={closeAllDropdowns}
                                                                                    >
                                                                                        {nestedItem.name}
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                // Regular dropdown item
                                                                <Link
                                                                    to={subItem.href}
                                                                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                                                                    onClick={closeAllDropdowns}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            // Regular navigation items
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                                    onClick={closeAllDropdowns}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            );
                        })}

                        {/* Donate Button - Always visible */}
                        <Link
                            to="/donate"
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
                            onClick={closeAllDropdowns}
                        >
                            Donate
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <div className="w-6 h-6 relative">
                            <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
                            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => {
                        setIsMobileMenuOpen(false);
                        closeAllDropdowns();
                    }}
                />
            </nav>
        </header>
    );
};

export default Header;