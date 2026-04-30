import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fadeIn font-serif">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
            alt="Industria y Prevención" 
            className="w-full h-full object-cover opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            No defendemos el conflicto, defendemos al profesional
          </h2>
          <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-6 tracking-tighter shadow-black drop-shadow-2xl">
            Quien pone la firma,<br/>
            <span className="text-white italic">no puede estar solo</span>
          </h1>
          <p className="text-lg md:text-2xl italic text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed border-l-4 border-primary pl-6">
            "Afiliarte no te enfrenta con nadie. Te protege como profesional. La prevención también necesita respaldo."
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/afiliacion" className="bg-primary text-white font-black py-4 px-10 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs">
              Sumate y Afiliate
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE DOLORES / PREGUNTAS --- */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "¿Te pueden hacer responsable penal si sos monotributista?",
            "¿Qué hacer si una ART te expone?",
            "Inspección laboral: qué firmar y qué no.",
            "Responsable técnico ≠ Responsable de todo."
          ].map((pregunta, i) => (
            <div key={i} className="bg-black p-8 border-b-4 border-white hover:translate-y-[-5px] transition-transform">
              <p className="text-white font-black uppercase text-sm leading-tight italic">"{pregunta}"</p>
              <p className="text-primary mt-4 text-[10px] uppercase font-bold tracking-widest">Ese respaldo construimos</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MANIFIESTO CORTO --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black uppercase mb-8 tracking-tighter">Sin condiciones dignas, no hay prevención real</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic font-serif">
            Contratos precarios, monotributo forzado, presiones para firmar sin condiciones. 
            Todos los días prevenimos riesgos, firmamos informes y asumimos responsabilidades. 
            <strong> Pero cuando hay un problema, muchas veces estamos solos.</strong>
          </p>
          <p className="text-primary font-black uppercase tracking-widest">Este sindicato nace para cambiar eso.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;