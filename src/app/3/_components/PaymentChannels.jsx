import React from 'react';
import { PaymentIcons } from '../constants';

const PaymentChannels = ({ id }) => {
    const channels = [
        { name: 'Visa', icon: <PaymentIcons.Visa /> },
        { name: 'Mastercard', icon: <PaymentIcons.Mastercard /> },
        { name: 'American Express', icon: <PaymentIcons.Amex /> },
        { name: 'PayPal', icon: <PaymentIcons.Paypal /> },
        { name: 'PSE', icon: <PaymentIcons.PSE /> },
        { name: 'Transferencia Bancaria', icon: <PaymentIcons.Bank /> },
    ];

    return (
        <section id={id} className="py-20 md:py-28 bg-[#FEF6FA]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Múltiples <span className="text-fuchsia-500">Canales de Pago</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Paga tu seguro de forma fácil, rápida y segura. Aceptamos una amplia variedad de métodos de pago.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    {channels.map(channel => (
                        <div key={channel.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-fuchsia-500/10 group">
                            <div className="h-12 w-full flex items-center justify-center text-gray-500 group-hover:text-fuchsia-600 transition-colors duration-300">
                                {channel.icon}
                            </div>
                            <p className="text-xs text-center mt-2 text-gray-400 font-medium">{channel.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentChannels;