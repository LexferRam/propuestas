'use client'
import { navLinks } from '../constants';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-black text-yellow-400 tracking-wider">
              KUBRELO
            </a>
            <p className="mt-4 max-w-md">
              Protegiendo tu futuro hoy. Simplicidad, confianza y tranquilidad en cada póliza.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><TwitterIcon /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><InstagramIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kubrelo Seguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
