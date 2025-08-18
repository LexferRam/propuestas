'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons/IconComponents';

const HeroSection = ({ products }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { current } = containerRef;
            if (!current) return;

            const { top, height } = current.getBoundingClientRect();
            const scrollableHeight = height - window.innerHeight;

            if (top > window.innerHeight || top < -height) return;

            const scrollProgress = Math.max(0, Math.min(1, -top / scrollableHeight));
            
            let newIndex = Math.floor(scrollProgress * products.length);
            if (newIndex >= products.length) {
                newIndex = products.length - 1;
            }

            setActiveIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products.length]);

    return (
        <section
            id="inicio"
            ref={containerRef}
            style={{ height: `${products.length * 100}vh` }} // Adjusted height for more natural scroll pace
            className="relative"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
                {/* Background Images */}
                <div className="absolute inset-0 z-0">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 animate-kenburns' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${product.image})` }}
                            aria-hidden={index !== activeIndex}
                        />
                    ))}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Text Content */}
                <div className="relative z-10 px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="relative h-52 flex items-center justify-center">
                        {products.map((product, index) => (
                            <div
                                key={product.name}
                                className={`absolute transition-all duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 transform-none' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: activeIndex === index ? '300ms' : '0ms' }}
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter drop-shadow-lg">
                                    {product.title}
                                </h1>
                                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
                                    {product.description}
                                </p>
                            </div>
                        ))}
                    </div>

                     {/* <a href="#productos" className="group inline-flex items-center justify-center px-8 py-4 mt-12 bg-kubrelo-yellow text-kubrelo-dark font-bold rounded-full text-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                        Cotizar Ahora
                        <ArrowRightIcon />
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;