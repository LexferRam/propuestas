'use client'
import React, { useState } from 'react';
import { CoverageIcons, CheckIcon } from '../constants';

const coverageData = [
    {
        type: 'Auto',
        icon: <CoverageIcons.Car />,
        items: [
            { name: 'Plan Básico', features: ['Responsabilidad Civil', 'Asistencia en Viaje', 'Defensa Jurídica'] },
            { name: 'Plan Amplio', features: ['Daños Materiales', 'Robo Total', 'Gastos Médicos a Ocupantes', 'Todo lo del Plan Básico'] },
            { name: 'Plan Premium', features: ['Auto Sustituto', 'Cobertura de Llantas', 'Cero Deducible', 'Todo lo del Plan Amplio'] },
        ]
    },
    {
        type: 'Hogar',
        icon: <CoverageIcons.Home />,
        items: [
            { name: 'Protección Esencial', features: ['Incendio y Terremoto', 'Daños por Agua', 'Robo de Contenidos'] },
            { name: 'Protección Completa', features: ['Rotura de Cristales', 'Equipo Electrodoméstico', 'Responsabilidad Civil Familiar', 'Todo lo Esencial'] },
        ]
    },
    {
        type: 'Vida',
        icon: <CoverageIcons.Heart />,
        items: [
            { name: 'Vida Básico', features: ['Fallecimiento', 'Apoyo para Gastos Funerarios'] },
            { name: 'Vida Plus', features: ['Invalidez Total y Permanente', 'Enfermedades Graves', 'Doble Indemnización por Accidente'] },
        ]
    },
    {
        type: 'Salud',
        icon: <CoverageIcons.Health />,
        items: [
            { name: 'Plan Preventivo', features: ['Consultas Médicas', 'Estudios de Laboratorio', 'Check-up Anual'] },
            { name: 'Plan Mayor', features: ['Hospitalización', 'Cirugías', 'Maternidad', 'Cobertura Internacional'] },
        ]
    }
];

const Coverage = ({ id }) => {
    const [activeTab, setActiveTab] = useState('Auto');

    const activeCoverage = coverageData.find(c => c.type === activeTab);

    return (
        <section id={id} className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        ¿Qué <span className="text-fuchsia-500">Kubrelo</span>?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Planes diseñados para proteger lo que más te importa. Elige la cobertura que mejor se adapte a tu vida.
                    </p>
                </div>

                <div className="flex justify-center mb-12 border-b border-gray-200">
                    {coverageData.map(tab => (
                        <button
                            key={tab.type}
                            onClick={() => setActiveTab(tab.type)}
                            className={`flex items-center space-x-2 px-4 py-3 text-lg font-semibold transition-colors duration-300 -mb-px border-b-2
                ${activeTab === tab.type
                                    ? 'border-fuchsia-500 text-fuchsia-500'
                                    : 'border-transparent text-gray-500 hover:text-gray-900'
                                }`
                            }
                        >
                            {tab.icon}
                            <span className="hidden sm:inline">{tab.type}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeCoverage?.items.map(item => (
                        <div key={item.name} className="bg-[#FEF6FA] p-8 rounded-xl flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/10 hover:-translate-y-1">
                            <h3 className="text-2xl font-bold text-fuchsia-500 mb-6">{item.name}</h3>
                            <ul className="space-y-4 flex-grow">
                                {item.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon />
                                        <span className="ml-3 text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Coverage;