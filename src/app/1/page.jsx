
import React from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';
import AnimatedSection from './_components/AnimatedSection';
import Testimonials from './_components/Testimonials';
import HeroSection from './_components/HeroSection';
import { ArrowRightIcon } from './_components/icons/IconComponents';
import { HospitalIcon, WrenchIcon, ClinicIcon, GlobeIcon, TuneIcon, DevicesIcon, ShieldWithHeartIcon } from './_components/icons/BrandIcons';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const page = () => {

    const benefits = [
        {
            icon: <TuneIcon />,
            title: "Cobertura a tu Medida",
            description: "Planes flexibles que se adaptan a tus necesidades y presupuesto. Tú eliges qué proteger."
        },
        {
            icon: <SupportAgentIcon />,
            title: "Asistencia 24/7",
            description: "Estamos para ayudarte en cualquier momento, sin importar la hora o el lugar. Tu tranquilidad es nuestra prioridad."
        },
        {
            icon: <DevicesIcon />,
            title: "Proceso Sencillo y Digital",
            description: "Contrata y gestiona tu póliza 100% online, sin papeleos ni complicaciones."
        }
    ];

    const products = [
        { 
            name: "Seguro de Auto", 
            image: "/pexels-car-img.jpg",
            title: "Protección total para tus viajes en familia",
            description: "Viaja tranquilo sabiendo que los tuyos están protegidos. Cobertura completa, asistencia en el camino y la seguridad que tu familia merece."
        },
        { 
            name: "Seguro de Hogar", 
            image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2148&auto=format&fit=crop",
            title: "Tu Hogar, el refugio de tu familia",
            description: "Asegura el lugar donde construyes tus recuerdos. Protección contra incendios, robos y desastres naturales para su total tranquilidad."
        },
        { 
            name: "Seguro de Vida", 
            image: "/pexels-family.jpg",
            title: "El Futuro de tu Familia, garantizado",
            description: "Brinda seguridad financiera a tus seres queridos. Un acto de amor que perdura y los protege cuando más lo necesiten."
        },
        {
            name: "Seguro Funerario",
            image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2070&auto=format&fit=crop",
            title: "Protege su legado y la tranquilidad de los tuyos",
            description: "Asegura que los momentos difíciles no sean una carga financiera para tu familia. Planifica con amor, brindando paz y soporte cuando más lo necesiten."
        },
        {
            name: "Accidentes Personales",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
            title: "Vive cada momento, nosotros te cuidamos",
            description: "Disfruta de tus actividades diarias con la confianza de estar protegido ante cualquier imprevisto. Cobertura completa para accidentes, en todo momento y lugar."
        }
    ];

const coverages = [
  {
    icon: <HealthAndSafetyIcon className='text-yellow-400' />,
    title: 'Daños a Terceros',
    description: 'Cubrimos los daños que puedas ocasionar a otras personas o a sus bienes.'
  },
  {
    icon: <NoCrashIcon className='text-yellow-400' />,
    title: 'Pérdida Total por Daños o Robo',
    description: 'Te indemnizamos por el valor comercial de tu vehículo en caso de ser irreparable o robado.'
  },
  {
    icon: <MedicalServicesIcon  className='text-yellow-400'/>,
    title: 'Gastos Médicos a Ocupantes',
    description: 'Amparamos los costos de atención médica para ti y tus acompañantes en caso de accidente.'
  },
  {
    icon: <SupportAgentIcon className='text-yellow-400' />,
    title: 'Asistencia Legal y Vial',
    description: 'Te brindamos apoyo con grúa, paso de corriente, cambio de llanta y asesoría legal 24/7.'
  }
];

    const partners = [
        { name: "Hospital ABC", logo: <HospitalIcon /> },
        { name: "Taller Express", logo: <WrenchIcon /> },
        { name: "Clínica Salud", logo: <ClinicIcon /> },
        { name: "Asistencia Global", logo: <GlobeIcon /> },
    ];
    
    const paymentChannels = [
        { name: "Visa", logoUrl: "https://asset.brandfetch.io/idq5OL_p-p/idFmoANO1p.svg" },
        { name: "Mastercard", logoUrl: "https://asset.brandfetch.io/idq5OL_p-p/id-n_xZ2-i.svg" },
        { name: "American Express", logoUrl: "https://asset.brandfetch.io/idq5OL_p-p/id-n_xZ2-i.svg" },
        { name: "PayPal", logoUrl: "https://asset.brandfetch.io/idq5OL_p-p/idFmoANO1p.svg" },
    ];


    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <HeroSection products={products} />
                
                {/* Beneficios Section */}
                <section id="beneficios" className="py-20 lg:py-28 bg-kubrelo-light">
                    <div className="container mx-auto px-6 lg:px-8">
                        <AnimatedSection>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-kubrelo-dark">Beneficios que marcan la diferencia</h2>
                                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Diseñamos nuestros servicios pensando en ti, para ofrecerte la mejor experiencia y el máximo respaldo.</p>
                            </div>
                        </AnimatedSection>
                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <AnimatedSection key={index}>
                                    <div className="group bg-kubrelo-gray p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                                        <div className="inline-block p-4 bg-kubrelo-yellow rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                                            <span className="material-symbols-outlined text-4xl text-kubrelo-dark align-middle">
                                                 {benefit.icon}
                                             </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-kubrelo-dark mb-2">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Productos Section */}
                <section id="productos" className="py-20 lg:py-28 bg-kubrelo-gray">
                    <div className="container mx-auto px-6 lg:px-8">
                         <AnimatedSection>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-kubrelo-dark">Nuestros Productos</h2>
                                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Encuentra la cobertura perfecta para lo que más te importa. Cotiza y contrata en minutos.</p>
                            </div>
                        </AnimatedSection>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {products.map((product, index) => (
                                <AnimatedSection key={index}>
                                    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="w-full h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: `url(${product.image})`}} />
                                        <div className="p-6 bg-kubrelo-light">
                                            <h3 className="text-xl font-bold text-kubrelo-dark mb-4">{product.name}</h3>
                                            <a href="#" className="font-bold text-kubrelo-dark group-hover:text-kubrelo-yellow transition-colors duration-300 flex items-center">
                                                Cotizar aquí <ArrowRightIcon />
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Coberturas Section */}
                <section id="coberturas" className="py-20 lg:py-28 bg-kubrelo-light">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <AnimatedSection className="order-2 md:order-1">
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-kubrelo-dark mb-6">Cobertura Completa para tu Tranquilidad</h2>
                                <p className="text-lg text-gray-600 mb-10">
                                    Nuestras pólizas están diseñadas para ofrecerte un respaldo sólido ante los imprevistos más comunes. Conoce los pilares de nuestra protección.
                                </p>
                                <div className="space-y-8">
                                    {coverages.map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <div className="bg-kubrelo-yellow/20 p-3 rounded-full">
                                                    <span className="material-symbols-outlined text-3xl text-kubrelo-dark align-middle">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-5">
                                                <h4 className="text-xl font-bold text-kubrelo-dark">{item.title}</h4>
                                                <p className="text-gray-600 mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                            <AnimatedSection className="order-1 md:order-2">
                                <img
                                    src="/pexels-family.jpg"
                                    alt="Familia protegida bajo un paraguas, simbolizando la cobertura de seguro"
                                    className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <Testimonials />
                
                {/* Redes Aliados y Canales de Pago Section */}
                <section id="aliados" className="py-20 lg:py-28 bg-kubrelo-dark text-kubrelo-light">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16">
                            <AnimatedSection>
                                <h3 className="text-3xl font-bold mb-6 text-center md:text-left text-kubrelo-yellow">Nuestra Red de Aliados</h3>
                                <p className="text-gray-300 mb-8 text-center md:text-left">Contamos con una amplia red de socios estratégicos para brindarte el mejor servicio donde quiera que estés.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {partners.map(partner => (
                                        <div key={partner.name} className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center justify-center space-y-2 transition-colors hover:bg-gray-800">
                                            {partner.logo}
                                            <p className="font-semibold text-sm text-center">{partner.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                            <AnimatedSection>
                                <h3 className="text-3xl font-bold mb-6 text-center md:text-left text-kubrelo-yellow">Canales de Pago Seguros</h3>
                                <p className="text-gray-300 mb-8 text-center md:text-left">Paga tu póliza de forma rápida y segura a través de nuestras plataformas aliadas.</p>
                                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {paymentChannels.map((channel, index) => (
                                        <div key={`${channel.name}-${index}`} className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-800 h-24">
                                            <img src={channel.logoUrl} alt={`${channel.name} logo`} className="h-10 w-auto object-contain text-yellow-400" />
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-kubrelo-yellow">
                    <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-kubrelo-dark">¿Listo para estar cubierto?</h2>
                            <p className="mt-4 text-lg text-kubrelo-dark max-w-2xl mx-auto">
                                Da el primer paso hacia tu tranquilidad. Obtén una cotización personalizada en segundos.
                            </p>
                            <a href="#productos" className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-kubrelo-dark text-kubrelo-light font-bold rounded-full text-lg shadow-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                                Obtener mi Cotización
                            </a>
                        </AnimatedSection>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default page;
