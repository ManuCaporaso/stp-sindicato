import React from 'react';

const Institucional = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-black py-20 px-8 text-center border-b-8 border-primary">
        <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic">Nuestra Historia</h1>
        <p className="text-primary font-bold uppercase tracking-widest mt-4">Personería Jurídica Nº 3244</p>
      </header>

      <section className="max-w-5xl mx-auto py-20 px-8">
        <div className="prose prose-lg max-w-none text-gray-800 font-serif leading-relaxed italic">
          <p className="text-2xl mb-8">
            En Noviembre de 2025 obtuvimos nuestra Personería otorgada por la Secretaría de Trabajo de la Nación, 
            porque creemos en la defensa profesional dentro de la ley.
          </p>
          <div className="grid md:grid-cols-2 gap-12 not-italic">
            <div className="bg-gray-50 p-10 border-l-8 border-primary shadow-xl">
              <h4 className="font-black uppercase text-xl mb-4">¿Por qué nacimos?</h4>
              <p className="text-sm text-gray-600">
                Rechazamos la figura del <strong>“responsable técnico decorativo”</strong>. 
                Buscamos el respeto a los criterios técnicos y condiciones mínimas para ejercer con responsabilidad. 
                No es imponer salarios, es poner un piso ético y técnico.
              </p>
            </div>
            <div className="bg-black text-white p-10 shadow-xl">
              <h4 className="font-black uppercase text-xl mb-4 text-primary">Oficina de Empleo</h4>
              <p className="text-sm text-gray-300 italic">
                Contamos con una Escuela de capacitación con salida laboral directamente desde nuestra oficina de empleo, 
                enfocada en profesionalizar el sector en Neuquén y Río Negro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institucional;