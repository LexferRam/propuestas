
'use client'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

// Using SVG logos for better quality and scalability.
const allyLogos = [
  { name: 'Allianz', url: 'https://cdn.worldvectorlogo.com/logos/allianz-1.svg' },
  { name: 'AON', url: 'https://cdn.worldvectorlogo.com/logos/allianz-1.svg' },
  { name: 'Chubb', url: 'https://cdn.worldvectorlogo.com/logos/allianz-1.svg' },
  { name: 'Generali', url: 'https://cdn.worldvectorlogo.com/logos/allianz-1.svg' },
  { name: 'Liberty Mutual', url: 'https://cdn.worldvectorlogo.com/logos/allianz-1.svg' },
  { name: 'Mapfre', url: 'https://cdn.worldvectorlogo.com/logos/mapfre-1.svg' },
];

const Allies = () => {
    const { ref, animationClasses } = useAnimateOnScroll();
  return (
    <section id="aliados" ref={ref} className={`py-20 bg-yellow-50 ${animationClasses}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Nuestra Red de Aliados</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Colaboramos con las mejores empresas para ofrecerte un servicio excepcional y de confianza.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {allyLogos.map((logo) => (
            <div key={logo.name}>
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-10 md:h-12 lg:h-14 w-auto transition-all duration-300 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allies;