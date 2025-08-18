
import React from 'react';
import Header from './_components/Header';
import Hero from './_components/Hero';
import Allies from './_components/Allies';
import Benefits from './_components/Benefits';
import Coverage from './_components/Coverage';
import PaymentChannels from './_components/PaymentChannels';
import Products from './_components/Products';
import Testimonials from './_components/Testimonials';
import Footer from './_components/Footer';

function page() {
    return (
        <div className="bg-white text-gray-800 min-h-screen overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Allies />
                <Benefits />
                <Coverage />
                <PaymentChannels />
                <Products />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

export default page;