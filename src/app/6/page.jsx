"use client";
import Head from 'next/head';
import Header from './_components/Header';
import Footer from './_components/Footer';
import HeroSection from './_components/HeroSection';
import BenefitsSection from './_components/BenefitsSection';
import ClinicsSection from './_components/ClinicsSection';
import PricingSection from './_components/PricingSection';


export default function Home() {
  return (
    <>
      <Head>
        <title>PinPamPum - Tu Confianza es Nuestra Prioridad</title>
        <meta name="description" content="Atención médica de calidad con profesionales certificados." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <Header />
      <main>
        <HeroSection /> 
        <BenefitsSection />
        <ClinicsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}