'use client'
import React, { useRef, useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { QuoteIcon } from './icons/IconComponents';

const testimonials = [
    {
        quote: "El proceso fue increíblemente rápido y sencillo. Pude asegurar mi auto en menos de 10 minutos desde mi celular. ¡Totalmente recomendado!",
        name: "Carla Rodriguez",
        policy: "Seguro de Auto",
    },
    {
        quote: "Tener el seguro de hogar con Pim Pam Pum me da una paz mental invaluable. La atención al cliente es de primera, siempre amables y dispuestos a ayudar.",
        name: "Juan Pérez",
        policy: "Seguro de Hogar",
    },
    {
        quote: "Contraté un seguro de vida pensando en mi familia y Pim Pam Pum me ofreció la mejor cobertura al precio más justo. Su plataforma es muy intuitiva.",
        name: "Sofía Gómez",
        policy: "Seguro de Vida",
    },
    {
        quote: "Cuando necesité usar mi seguro de gastos médicos, el proceso fue transparente y sin complicaciones. Me sentí respaldado en todo momento.",
        name: "Miguel Ángel Torres",
        policy: "Gastos Médicos",
    },
    {
        quote: "La flexibilidad de los planes es lo que más me gustó. Pude armar un paquete a mi medida sin pagar por coberturas que no necesito.",
        name: "Fernanda Lima",
        policy: "Seguro de Auto",
    },
    {
        quote: "Excelente servicio. La asistencia 24/7 es real. Tuve un percance en la madrugada y me atendieron de inmediato.",
        name: "Ricardo Salas",
        policy: "Seguro de Auto",
    },
];

const Testimonials = () => {
    const sliderRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (isDragging || isHovering) {
            // Animation is paused by user interaction, so we don't need to do anything here.
            // The cleanup function of the previous effect will have cancelled the animation frame.
            return;
        }

        let animationFrameId

        const loop = () => {
            if (sliderRef.current) {
                const slider = sliderRef.current;
                // Duplicate the content to create a seamless loop
                const maxScrollLeft = slider.scrollWidth / 2;
    
                slider.scrollLeft += 0.5;
                if (slider.scrollLeft >= maxScrollLeft) {
                    // Reset scroll position to the beginning for a seamless loop
                    slider.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDragging, isHovering]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        if (sliderRef.current) {
            setStartX(e.pageX - sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
        }
    };
    
    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsHovering(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <section id="testimonios" className="py-20 lg:py-28 bg-kubrelo-light overflow-hidden">
            <div className="container mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-16 px-6 lg:px-8">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-kubrelo-dark">Lo que dicen nuestros clientes</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">La confianza y tranquilidad de miles de asegurados es nuestro mayor orgullo.</p>
                    </div>
                </AnimatedSection>
                
                <div 
                    className="relative w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
                >
                    <div 
                        // ref={sliderRef}
                        className="flex flex-nowrap overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={index} className="w-[350px] md:w-[400px] mx-4 flex-shrink-0">
                                <div className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-between border border-gray-100">
                                    <div>
                                        <QuoteIcon />
                                        <p className="text-gray-700 italic mt-4 mb-6">"{testimonial.quote}"</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-kubrelo-dark text-lg">{testimonial.name}</p>
                                        <p className="text-gray-500">{testimonial.policy}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
