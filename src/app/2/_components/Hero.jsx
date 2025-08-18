'use client'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Hero= () => {
  const { ref, animationClasses } = useAnimateOnScroll();

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <img src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=1920&auto=format&fit=crop" alt="Familia caminando en la playa al atardecer, simbolizando un futuro seguro y feliz" className="absolute inset-0 w-full h-full object-cover"/>
      
      <div ref={ref} className={`relative z-20 container mx-auto px-6 ${animationClasses}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-4">
          La tranquilidad que buscas,
          <br />
          <span className="text-yellow-400">a un clic de distancia.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          En Kubrelo, protegemos lo que más importa. Soluciones de seguro simples, transparentes y a tu medida.
        </p>
        <a
          href="#productos"
          className="bg-yellow-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Descubre Nuestros Productos
        </a>
      </div>
    </section>
  );
};

export default Hero;
