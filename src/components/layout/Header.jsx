import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/content';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    useEffect(() => {
        let frameId;

        const handleScroll = () => {
            if (frameId) return;

            frameId = window.requestAnimationFrame(() => {
                const scrolledPx = window.scrollY;
                const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

                setScrolled(scrolledPx > 20);
                setScrollProgress(totalScroll > 0 ? Math.min((scrolledPx / totalScroll) * 100, 100) : 0);
                frameId = null;
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId) window.cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        closeMobileMenu();
    }, [closeMobileMenu, location.pathname]);

    const navigationItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Team', href: '/team' },
        { name: 'Awards', href: '/awards' },
        { name: 'Partners', href: '/partners' },
        { name: 'Blog', href: '/blog' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-soft py-3'
                    : 'bg-white/95 backdrop-blur-sm py-5'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow-medium">
                            {siteContent.site?.name?.[0] || 'D'}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-semibold text-secondary-800 group-hover:text-primary-600 transition-colors">
                                {siteContent.site?.name || 'DRMHI Africa'}
                            </span>
                            <span className="text-xs text-secondary-500 hidden sm:block">
                                Digital Rights & Mental Health
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                    location.pathname === item.href
                                        ? 'text-primary-700 bg-primary-50'
                                        : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Donate Button */}
                        <Link
                            to="/donate"
                            className="ml-2 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg text-sm font-medium hover:from-primary-600 hover:to-accent-600 transition-all transform hover:scale-105 shadow-medium">
                                Donate
                            </div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden relative w-10 h-10 rounded-lg bg-secondary-100 hover:bg-secondary-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5">
                            <span className={`absolute left-0 w-5 h-0.5 bg-secondary-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-0' : '-top-1.5'}`}></span>
                            <span className={`absolute left-0 w-5 h-0.5 bg-secondary-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-0'}`}></span>
                            <span className={`absolute left-0 w-5 h-0.5 bg-secondary-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-0' : 'top-1.5'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={closeMobileMenu}
                />
            </nav>

            {/* Progress Bar - using your config colors */}
            {scrolled && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-100">
                    <div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
                        style={{ width: `${scrollProgress}%` }}
                    ></div>
                </div>
            )}
        </header>
    );
};

export default Header;
