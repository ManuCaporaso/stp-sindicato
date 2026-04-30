import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t-8 border-white font-serif">
      {/* SECCIÓN PRINCIPAL: NARANJA UNIFICADO */}
      <div className="max-w-8xl mx-8 px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* COLUMNA 1: IDENTIDAD */}
        <div className="space-y-6">
          <h4 className="text-white font-black text-4xl uppercase tracking-tighter drop-shadow-md">
            STPRSPA
          </h4>
          <p className="text-white/90 text-sm leading-relaxed italic border-l-2 border-white/30 pl-4">
            "Defendemos profesionales, no conflictos. Quien pone la firma, no puede estar solo."
          </p>
          <div className="inline-block bg-white text-primary px-4 py-2 font-black uppercase text-[10px] tracking-widest shadow-lg">
            Personería Jurídica N° 3244
          </div>
          
          {/* REDES SOCIALES UNIFICADAS */}
          <div className="flex gap-4 pt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white text-primary p-3 hover:bg-black hover:text-white transition-all shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white text-primary p-3 hover:bg-black hover:text-white transition-all shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
        
        {/* COLUMNA 2: SEDE */}
        <div className="bg-white/10 p-6 shadow-inner">
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 pb-2 border-b border-white/20 inline-block">
            Sede Central
          </h4>
          <address className="not-italic space-y-4 text-sm font-bold uppercase tracking-tighter">
            <div>
              <p className="text-lg">ALMIRANTE BROWN N°20</p>
              <p className="text-black text-xl">Oficina “A”</p>
              <p className="mt-1 opacity-80">Neuquén Capital</p>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-[10px] font-black text-white/60">Atención:</p>
              <p className="text-2xl font-black">09:00 — 15:00</p>
            </div>
          </address>
        </div>

        {/* COLUMNA 3: CONTACTO */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 pb-2 border-b border-white/20 inline-block">
            Vías Directas
          </h4>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-black text-white/50 uppercase mb-1">Email</p>
              <a href="mailto:sindicato.prevencionriesgos@gmail.com" className="block text-sm font-bold hover:text-black transition-colors break-words">
                sindicato.prevencionriesgos@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] font-black text-white/50 uppercase mb-1">WhatsApp</p>
              <a href="tel:2996377640" className="block text-3xl font-black hover:text-black transition-all">
                299 6377640
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA 4: MAPA (CON ZOOM) */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-4 pb-2 border-b border-white/20 inline-block">
            Ubicación
          </h4>
          <div className="w-full h-48 bg-white p-1 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8517223012356!2d-68.05886652431417!3d-38.9555665717112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33cb8e67a14f%3A0x6b0a7c4f4d4d4d4d!2sAlmirante%20Brown%2020%2C%20Q8300%20Neuquén!5e0!3m2!1ses-419!2sar!4v1714400000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Mapa STPRSPA"
              className="hover:opacity-90 transition-opacity"
            ></iframe>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: NARANJA OSCURO / MÁS SUAVE */}
      <div className="bg-white/5 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-[9px] md:text-[10px] text-white/60 uppercase tracking-[0.2em] text-center md:text-left leading-relaxed font-sans max-w-xl">
            Sindicato de Trabajadores de la Prevención de Riesgos Laborales, Salud Ocupacional y Protección Ambiental — Neuquén y Río Negro. © 2026
          </div>

          {/* FIRMA INTEGRADA AL ESTILO */}
          <div className="flex items-center">
            <a href="https://manuelcaporaso.online" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center md:items-end gap-1">
              <span className="text-[7px] uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">Developed by</span>
              <img src="/images/logo/logo-dev.png" alt="Caporaso DEV" className="h-6 w-auto opacity-80 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;