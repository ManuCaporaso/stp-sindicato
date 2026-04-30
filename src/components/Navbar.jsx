import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-[100] shadow-2xl border-b-4 border-black/10 font-sans">
      
      {/* --- BARRA SUPERIOR (DATOS DE CONTACTO Y LEGALES) --- */}
      <div className="bg-black text-white py-1.5 px-4 md:px-8 flex justify-between items-center text-[8px] md:text-[10px] tracking-widest border-b border-primary/20">
        <div className="flex items-center gap-4">
          <span className="text-primary font-black uppercase">Personería Jurídica N° 3244</span>
          <span className="hidden md:inline text-gray-700">|</span>
          <a href="tel:2994483575" className="flex items-center gap-1 hover:text-primary transition-colors">
            TEL: 299 4483575
          </a>
        </div>
        <div className="hidden sm:block italic text-gray-500 lowercase">
          sindicato.prevencionriesgos@gmail.com
        </div>
      </div>

      {/* --- CUERPO PRINCIPAL DEL NAV --- */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3 flex justify-between items-center">
          
          {/* --- LOGO Y NOMBRE --- */}
          <Link 
            to="/" 
            onClick={closeMenu} 
            className="flex items-center gap-2 md:gap-4 group max-w-[80%] md:max-w-none transition-all"
          >
            <div className="shrink-0">
              <img 
                src="/images/logo/logo-nuevo-stp.png" 
                alt="STPRSPA Logo" 
                className="h-10 md:h-14 lg:h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center border-l-2 border-white/20 pl-3 md:pl-4">
              <h1 className="font-black uppercase tracking-tighter leading-none italic">
                <span className="text-[12px] md:hidden block mb-0.5">STPRSPA</span>
                <span className="hidden md:inline-block text-base lg:text-lg leading-[1.1] max-w-[400px] lg:max-w-[500px]">
                  Sindicato de Trabajadores de la Prevención de Riesgos Laborales, 
                  <span className="text-black/80 block lg:inline lg:ml-1 text-sm lg:text-lg not-italic">
                    Salud Ocupacional y Protección Ambiental
                  </span>
                </span>
              </h1>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-extrabold text-black/60 leading-none mt-1.5">
                Neuquén y Río Negro
              </span>
            </div>
          </Link>

          {/* --- BOTONES NAVEGACIÓN DESKTOP --- */}
          <div className="flex items-center gap-4">
            <ul className="hidden lg:flex gap-8 text-[11px] uppercase tracking-widest font-black items-center">
              <li><Link to="/" className="hover:text-black transition-colors">Inicio</Link></li>
              <li><Link to="/institucional" className="hover:text-black transition-colors">Institucional</Link></li>
              <li><Link to="/contacto" className="hover:text-black transition-colors">Contacto</Link></li>
              <li>
                <Link to="/afiliacion" className="bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition-all shadow-xl border border-black">
                  Afiliarse
                </Link>
              </li>
            </ul>

            {/* BOTÓN SANDWICH (MOBILE) */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 bg-white text-black rounded-sm shadow-xl border-2 border-black/10"
              aria-label="Abrir Menú"
            >
              <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
              <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 translate-y-[-6px]' : 'translate-y-1.5'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MOBILE --- */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col text-center py-10 gap-8 text-sm uppercase tracking-[0.2em] font-black text-white">
          <li><Link to="/" onClick={closeMenu} className="hover:text-primary transition-colors block">Inicio</Link></li>
          <li><Link to="/institucional" onClick={closeMenu} className="hover:text-primary transition-colors block">Institucional</Link></li>
          <li><Link to="/contacto" onClick={closeMenu} className="hover:text-primary transition-colors block">Contacto</Link></li>
          <li className="px-10 pt-4">
            <Link 
              to="/afiliacion" 
              onClick={closeMenu} 
              className="bg-primary text-white block py-5 shadow-lg active:scale-95 transition-transform"
            >
              Afiliarse Ahora
            </Link>
          </li>
          <li className="mt-4 text-[10px] text-gray-500 font-normal normal-case italic border-t border-white/10 pt-6 px-6">
            Brown N°20 Oficina “A” - Neuquén Capital
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;