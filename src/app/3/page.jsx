import React from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Partners from './_components/Partners';
import Benefits from './_components/Benefits';
import Coverage from './_components/Coverage';
import PaymentChannels from './_components/PaymentChannels';
import Footer from './_components/Footer';

const page = () => {
  return (
    <div className="bg-[#FEF6FA] text-gray-800 min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero id="productos" />
        <Partners id="aliados" />
        <Benefits id="beneficios" />
        <Coverage id="cobertura" />
        <PaymentChannels id="pagos" />
      </main>
      <Footer />
    </div>
  );
};

export default page;