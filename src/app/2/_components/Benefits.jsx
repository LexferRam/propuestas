'use client'
import { benefits } from '../constants';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const BenefitCard= ({ benefit, delay }) => {
    const { ref, animationClasses } = useAnimateOnScroll();
    return (
        <div ref={ref} className={`bg-white p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${animationClasses}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="text-yellow-400 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
        </div>
    );
}

const Benefits = () => {
  const { ref, animationClasses } = useAnimateOnScroll();
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-gray-900">Beneficios que marcan la diferencia</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            Diseñamos nuestros seguros pensando en ti, para ofrecerte más que solo una póliza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;