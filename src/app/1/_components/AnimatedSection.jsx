
'use client'
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className = '' }) => {
    const ref = useRef(null);
    const entry = useIntersectionObserver(ref, { threshold: 0.1 });
    const isVisible = !!entry?.isIntersecting;

    return (
        <div
            ref={ref}
            className={`${className} transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;

