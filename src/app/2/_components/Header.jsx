'use client'
import React, { useState } from 'react';
import { navLinks } from '../constants';
import { MenuIcon, XIcon } from './icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-black text-yellow-400 tracking-wider">
                    KUBRELO
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <a href="#productos" className="hidden md:inline-block bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                    Cotizar Ahora
                </a>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 font-medium">
                                {link.name}
                            </a>
                        ))}
                        <a href="#productos" onClick={() => setIsOpen(false)} className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300">
                            Cotizar Ahora
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;