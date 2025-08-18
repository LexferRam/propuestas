'use client'
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#aliados', label: 'Redes Aliados' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#cobertura', label: 'Cobertura' },
    { href: '#pagos', label: 'Canales de Pago' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FEF6FA]/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-3xl font-black tracking-tighter text-gray-900">
            Kubrelo<span className="text-fuchsia-500">.</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-fuchsia-500 transition-colors duration-200 font-medium">{link.label}</a>
            ))}
          </nav>

          <a href="#productos" className="hidden md:inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
            Cotizar Aquí
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-fuchsia-500 transition-colors duration-200">{link.label}</a>
              ))}
              <a href="#productos" onClick={() => setIsMenuOpen(false)} className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold text-center py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                Cotizar Aquí
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;