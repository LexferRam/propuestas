
'use client'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const paymentLogos = [
  { name: 'Visa', url: 'https://cdn.worldvectorlogo.com/logos/american-express-1.svg' },
  { name: 'Mastercard', url: 'https://cdn.worldvectorlogo.com/logos/pse-1.svg' },
  { name: 'American Express', url: 'https://cdn.worldvectorlogo.com/logos/american-express-1.svg' },
  { name: 'PayPal', url: 'https://cdn.worldvectorlogo.com/logos/paypal-3.svg' },
  { name: 'PSE', url: 'https://cdn.worldvectorlogo.com/logos/pse-1.svg' },
  { name: 'Bancolombia', url: 'https://cdn.worldvectorlogo.com/logos/paypal-3.svg' },
];

const PaymentChannels = () => {
  const { ref, animationClasses } = useAnimateOnScroll();
  return (
    <section id="pagos" ref={ref} className={`py-20 bg-white ${animationClasses}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Múltiples Canales de Pago</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Paga tus primas de forma rápida, segura y conveniente a través de nuestros canales autorizados.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {paymentLogos.map((logo) => (
            <div key={logo.name} className="bg-gray-100 p-4 rounded-lg flex justify-center items-center h-20 w-36 transition-transform duration-300 hover:scale-110 shadow-sm">
              <img src={logo.url} alt={logo.name} className="max-h-12 max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentChannels;