import React from 'react';

const PartnerLogo = ({ name }) => (
    <div className="flex items-center justify-center h-24 p-4 bg-gray-100 rounded-lg grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-105">
        <span className="text-xl font-bold text-gray-600">{name}</span>
    </div>
);

const Partners = ({ id }) => {
    const partners = [
        "Clínica SaludTotal",
        "AutoReparo Express",
        "HogarSeguro Tech",
        "Vida Plena Asesores",
        "Viajes Confianza",
        "Bienestar Financiero"
    ];

    return (
        <section id={id} className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Nuestra <span className="text-fuchsia-500">Red de Aliados</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Colaboramos con los mejores para brindarte un servicio integral y de confianza en todo momento.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partners.map(partner => <PartnerLogo key={partner} name={partner} />)}
                </div>
            </div>
        </section>
    );
};

export default Partners;