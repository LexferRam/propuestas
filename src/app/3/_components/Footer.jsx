
import React from 'react';
import { SocialIcons } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-2xl font-black tracking-tighter text-white">
              Kubrelo<span className="text-fuchsia-500">.</span>
            </h3>
            <p className="text-gray-400 mt-2 max-w-xs mx-auto md:mx-0">
              Protegiendo tu mundo, asegurando tu futuro.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contacto</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="mailto:info@kubrelo.com" className="hover:text-fuchsia-400">info@kubrelo.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-fuchsia-400">+1 (234) 567-890</a></li>
              <li>Av. Siempre Viva 123, Ciudad Gótica</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300"><SocialIcons.Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300"><SocialIcons.Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300"><SocialIcons.Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300"><SocialIcons.LinkedIn /></a>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kubrelo Seguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
