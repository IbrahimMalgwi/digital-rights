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
                    ? 'bg-[#222222]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
                    : 'bg-[#222222] py-5 border-b border-transparent'
            }`}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-1.5 transition-transform group-hover:scale-110">
                            <img src="/images/logo.png" alt="DRMHI Africa Logo" className="h-full w-full object-contain" />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-display text-sm font-bold text-white transition-colors">
                                {siteContent.site?.name || 'DRMHI Africa'}
                            </span>
                            <span className="hidden text-xs font-medium text-white/70 sm:block">
                                Digital Rights & Mental Health
                            </span>
                        </div>
                    </Link>

                    <div className="hidden items-center space-x-1 lg:flex">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                                    location.pathname === item.href
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link to="/donate" className="ml-3 bg-[#e84a3c] px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#c73428]">
                            Donate
                        </Link>
                    </div>

                    <button
                        className="relative h-10 w-10 rounded-lg border border-white/10 bg-white/10 transition-colors hover:bg-white/20 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <div className="absolute left-1/2 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2">
                            <span className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-0 rotate-45' : '-top-1.5'}`}></span>
                            <span className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-0'}`}></span>
                            <span className={`absolute left-0 h-0.5 w-5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-0 -rotate-45' : 'top-1.5'}`}></span>
                        </div>
                    </button>
                </div>

                <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
            </nav>

            {scrolled && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div className="h-full bg-[#e84a3c] transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
                </div>
            )}
        </header>
    );
};

export default Header;
