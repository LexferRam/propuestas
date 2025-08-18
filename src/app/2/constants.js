
import React from 'react';
import { ShieldIcon, ZapIcon, GlobeIcon } from './_components/icons';

export const navLinks = [
  { name: 'Aliados', href: '#aliados' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Cobertura', href: '#cobertura' },
  { name: 'Productos', href: '#productos' },
  { name: 'Testimonios', href: '#testimonios' },
];

export const benefits = [
  {
    icon: <ShieldIcon />,
    title: 'Seguridad Total',
    description: 'Pólizas robustas que te protegen en todo momento, para que vivas sin preocupaciones.',
  },
  {
    icon: <ZapIcon />,
    title: 'Proceso 100% Digital',
    description: 'Cotiza, compra y gestiona tu seguro desde la comodidad de tu casa, sin papeleos.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Asistencia Global',
    description: 'Nuestra cobertura te acompaña a donde vayas, con una red de asistencia internacional.',
  },
];

export const products = [
  {
    name: 'Seguro de Vida',
    description: 'Garantiza el futuro financiero de tus seres queridos. Una decisión de amor y responsabilidad.',
    image: '/pexels-family.jpg',
  },
  {
    name: 'Seguro de Salud',
    description: 'Accede a la mejor atención médica. Tu bienestar es nuestra prioridad número uno.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Seguro Automotriz',
    description: 'Protege tu vehículo contra todo riesgo. Conduce con la confianza que solo Kubrelo te da.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
  },
];

export const testimonials = [
  {
    quote: 'El proceso fue increíblemente rápido y sencillo. Pude asegurar el futuro de mi familia en minutos, todo desde mi celular. ¡Totalmente recomendado!',
    name: 'Ana Sofía Pérez',
    role: 'Cliente Satisfecha',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'Cuando tuve un accidente automovilístico, Kubrelo se encargó de todo. La asistencia fue inmediata y el soporte inmejorable. Me dieron una tranquilidad invaluable.',
    name: 'Carlos Mendoza',
    role: 'Cliente Satisfecho',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'Viajo constantemente por trabajo y la cobertura internacional me ha salvado en más de una ocasión. Es un seguro en el que realmente puedes confiar, estés donde estés.',
    name: 'Laura Jiménez',
    role: 'Cliente Satisfecha',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
];