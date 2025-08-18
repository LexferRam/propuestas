
'use client'
import { testimonials } from '../constants';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { QuoteIcon, StarIcon } from './icons';

const TestimonialCard = ({ testimonial, delay }) => {
    const { ref, animationClasses } = useAnimateOnScroll();
    return (
        <div ref={ref} className={`bg-white p-8 rounded-xl shadow-lg flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300 ${animationClasses}`} style={{ transitionDelay: `${delay}ms` }}>
            <QuoteIcon className="text-yellow-400 mb-4" />
            <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.quote}"</p>
            <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400" />)}
            </div>
            <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

const Testimonials = () => {
    const { ref, animationClasses } = useAnimateOnScroll();
    return (
        <section id="testimonios" className="py-24 bg-white">
            <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black tracking-tight text-gray-900">Lo que dicen nuestros clientes</h2>
                    <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                        La confianza y satisfacción de quienes nos eligen es nuestro mayor orgullo.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
