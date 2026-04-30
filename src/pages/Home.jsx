import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fadeIn font-serif overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen md:min-h-[90vh] flex flex-col justify-center bg-black">
        {/* Fondo con Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.webp" 
            alt="Industria" 
            className="w-full h-full object-cover opacity-80 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-black/70 to-black"></div>
        </div>

        {/* CONTENEDOR DE CONTENIDO */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-0 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* LADO IZQUIERDO: LOGO (Derecho y Transparente) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="max-w-[150px] -mt-12 md:mt-0 md:max-w-xs transition-all duration-500">
              <img 
                src="/images/logo/logo-nuevo-stp.png" 
                alt="STPRSPA Logo" 
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" 
              />
            </div>
          </div>

          {/* LADO DERECHO: TEXTO */}
          <div className="w-full md:w-2/3 text-center md:text-left text-white">
            <div className="mb-6">
              <h2 className="text-primary font-black uppercase tracking-[0.15em] text-[10px] md:text-sm mb-2">
                No defendemos el conflicto, defendemos al profesional
              </h2>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tighter">
                Quien pone la firma,<br/>
                <span className="italic">no puede estar solo</span>
              </h1>
            </div>
            
            <p className="text-sm md:text-xl italic text-gray-200 mb-8 max-w-2xl md:mx-0 mx-auto leading-relaxed border-l-4 border-primary pl-4">
              "Afiliarte no te enfrenta con nadie. Te protege como profesional. La prevención también necesita respaldo."
            </p>

            <div className="flex justify-center md:justify-start">
              <Link 
                to="/afiliacion" 
                className="w-full md:w-auto bg-primary text-white font-black py-4 px-10 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs shadow-2xl"
              >
                Sumate y Afiliate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE PREGUNTAS --- */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "¿Te pueden hacer responsable penal si sos monotributista?",
            "¿Qué hacer si una ART te expone?",
            "Inspección laboral: qué firmar y qué no.",
            "Responsable técnico ≠ Responsable de todo."
          ].map((pregunta, i) => (
            <div key={i} className="bg-black p-6 border-b-4 border-white shadow-xl">
              <p className="text-white font-black uppercase text-xs leading-tight italic">"{pregunta}"</p>
              <p className="text-primary mt-3 text-[9px] uppercase font-bold tracking-widest">Ese respaldo construimos</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MANIFIESTO --- */}
      <section className="py-20 px-6 bg-white border-b-8 border-primary text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-8 tracking-tighter">Sin condiciones dignas, no hay prevención real</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic font-serif">
            Contratos precarios, monotributo forzado, presiones para firmar sin condiciones. 
            Todos los días prevenimos riesgos, firmamos informes y asumimos responsabilidades. 
            <strong> Pero cuando hay un problema, muchas veces estamos solos.</strong>
          </p>
          <p className="text-primary font-black uppercase tracking-widest text-sm">Este sindicato nace para cambiar eso.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;