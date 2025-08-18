
'use client'
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Beneficios', href: '#beneficios' },
        { name: 'Productos', href: '#productos' },
        { name: 'Coberturas', href: '#coberturas' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'Aliados', href: '#aliados' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#inicio" className="text-3xl font-extrabold text-kubrelo-dark">
                        Pim Pam Pum<span className="text-kubrelo-yellow">.</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                             <a key={link.name} href={link.href} className="text-gray-700 hover:text-kubrelo-dark font-semibold transition-colors duration-200">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <a href="#productos" className="hidden md:inline-block px-6 py-2.5 bg-kubrelo-dark text-kubrelo-light font-bold rounded-full hover:bg-black transition-colors duration-300">
                        Cotizar Aquí
                    </a>
                    <div className="md:hidden">
                        {/* Mobile menu button can be added here */}
                        <button className="text-kubrelo-dark">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;