import React from 'react';
import { BenefitIcons } from '../constants';

const BenefitCard = ({ benefit }) => (
    <div className="bg-white p-8 rounded-xl border border-gray-200/80 hover:border-fuchsia-300 transition-all duration-300 transform hover:-translate-y-2 group shadow-lg hover:shadow-xl hover:shadow-fuchsia-500/10">
        <div className="mb-6 text-fuchsia-500 group-hover:text-fuchsia-400 transition-colors duration-300">
            {benefit.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
    </div>
);

const Benefits = ({ id }) => {
    const benefits = [
        {
            icon: <BenefitIcons.Clock />,
            title: "Asistencia 24/7",
            description: "Estamos para ti a cualquier hora, todos los días del año. Tu tranquilidad no tiene horario."
        },
        {
            icon: <BenefitIcons.Shield />,
            title: "Cobertura Nacional",
            description: "Protégete sin importar en qué parte del país te encuentres. Nuestra red te acompaña."
        },
        {
            icon: <BenefitIcons.Wallet />,
            title: "Precios Flexibles",
            description: "Planes que se adaptan a tu presupuesto y necesidades, sin sacrificar la calidad de tu cobertura."
        },
        {
            icon: <BenefitIcons.Document />,
            title: "Gestión Digital",
            description: "Maneja tus pólizas, reporta siniestros y realiza pagos desde nuestra app de forma rápida y sencilla."
        },
        {
            icon: <BenefitIcons.Users />,
            title: "Atención Personalizada",
            description: "Un asesor experto te guiará para que elijas el seguro perfecto para ti y tu familia."
        },
        {
            icon: <BenefitIcons.Sparkles />,
            title: "Beneficios Exclusivos",
            description: "Accede a descuentos y promociones especiales con nuestra amplia red de aliados comerciales."
        }
    ];

    return (
        <section id={id} className="py-20 md:py-28 bg-[#FEF6FA]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Beneficios que marcan la <span className="text-fuchsia-500">diferencia</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Más que un seguro, somos un aliado que te ofrece ventajas únicas pensadas para tu bienestar.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map(benefit => <BenefitCard key={benefit.title} benefit={benefit} />)}
                </div>
            </div>
        </section>
    );
};

export default Benefits;