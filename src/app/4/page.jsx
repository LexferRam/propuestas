"use client";

import Head from 'next/head';
import HeroSection from './_components/HeroSection';
import Header from './_components/Header';
import Footer from './_components/Footer';
import TrustIndicators from './_components/TrustIndicators';
import BenefitsSection from './_components/BenefitsSection';
import ClinicsSection from './_components/ClinicsSection';
import PricingSection from './_components/PricingSection';
import PaymentMethods from './_components/PaymentMethods';





export default function Home() {
  return (
    <>
      <Head>
        <title>PinPamPum - Tu Confianza es Nuestra Prioridad</title>
        <meta name="description" content="Atención médica de confianza con profesionales certificados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main>
        <HeroSection />
        <TrustIndicators />
        <BenefitsSection />
        <ClinicsSection />
        <PricingSection />
        <PaymentMethods />
        
      </main>
      
      <Footer /> 
    </>
  );
}