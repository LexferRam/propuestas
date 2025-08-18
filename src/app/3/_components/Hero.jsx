import React from 'react';

const Hero = ({ id }) => {
    return (
        <section id={id} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>
            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

            <div className="relative z-20 container mx-auto px-6 py-24 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900 leading-tight mb-4">
                    Tu Tranquilidad, <br /> Nuestro <span className="text-fuchsia-500">Compromiso</span>.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    En Kubrelo, te ofrecemos la protección que necesitas con la flexibilidad que mereces. Descubre nuestros productos y asegura tu futuro hoy mismo.
                </p>
                <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-fuchsia-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                    Cotiza tu Seguro Ahora
                </button>
            </div>
        </section>
    );
};

export default Hero;