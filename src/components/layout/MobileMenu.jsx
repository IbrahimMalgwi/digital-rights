import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';

const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
            <div className="space-y-4">
                {siteContent.navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        className="block text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                        onClick={onClose}
                    >
                        {item.name}
                    </Link>
                ))}
                <Link
                    to="/donate"
                    className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                    onClick={onClose}
                >
                    Donate
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;