"use client";
import Head from 'next/head';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Benefits from './_components/Benefits';
import Hero from './_components/Hero';
import TrustIndicators from './_components/TrustIndicators';
import Testimonials from './_components/Testimonials';
import Clinics from './_components/Clinics';
import Pricing from './_components/Pricing';
import Payments from './_components/Payments';
import AlliesSection from './_components/Allies';



export default function Home() {
  return (
    <>
      <Head>
        <title>Kubrelo - Tu Confianza es Nuestra Prioridad</title>
        <meta name="description" content="Atención médica de calidad con profesionales certificados." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Benefits />
        <Testimonials />
        {/* <Clinics /> */}
        <AlliesSection />
        <Pricing />
        <Payments />
      </main>
      <Footer />
    </>
  );
}