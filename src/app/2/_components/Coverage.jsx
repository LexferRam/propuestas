
'use client'
import { CheckCircleIcon } from './icons';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const coverageItems = [
    'Atención médica 24/7',
    'Cobertura internacional',
    'Reembolsos rápidos y sencillos',
    'Acceso a red de hospitales premium',
    'Seguro de vida y accidentes',
    'Asistencia en el hogar y vial'
];

const Coverage = () => {
  const { ref, animationClasses } = useAnimateOnScroll();

  return (
    <section id="cobertura" className="py-24 bg-yellow-50">
      <div ref={ref} className={`container mx-auto px-6 ${animationClasses}`}>
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-md">
              <span className="text-yellow-500 font-bold">NUESTRA COBERTURA</span>
              <h2 className="text-4xl font-black mt-2 mb-6 text-gray-900">Protección completa para tu tranquilidad.</h2>
              <p className="text-gray-600 leading-relaxed">
                Con Kubrelo, tienes la certeza de estar cubierto ante cualquier imprevisto. Nuestra cobertura integral está diseñada para darte el respaldo que necesitas, cuando lo necesitas.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coverageItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <CheckCircleIcon className="text-yellow-500 mr-3" />
                        <span className="text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img 
                src="/pexels-family.jpg"
                alt="Pareja bajo un paraguas, simbolizando la protección y cobertura del seguro"
                className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;