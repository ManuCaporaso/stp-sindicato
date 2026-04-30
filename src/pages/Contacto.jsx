import React from 'react';

const Contacto = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-primary py-20 px-8 text-center text-white border-b-8 border-black">
        <h1 className="text-5xl font-black uppercase tracking-widest drop-shadow-md">Contacto Directo</h1>
        <p className="text-black font-serif italic text-xl mt-2">Estamos donde el trabajador nos necesita.</p>
      </header>

      <div className="max-w-7xl mx-auto py-20 px-8 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-black p-10 text-white border-l-8 border-primary shadow-xl">
            <h3 className="font-black uppercase text-primary mb-4 tracking-widest">Sede Central</h3>
            <p className="font-serif text-lg">Neuquén Capital</p>
            <p className="text-gray-400 text-sm italic">Calle de la Prevención 123</p>
            <div className="mt-6 text-primary font-bold">0299-4445555</div>
          </div>
          <div className="bg-white p-10 text-black border-l-8 border-black shadow-xl">
            <h3 className="font-black uppercase text-primary mb-4 tracking-widest">Sede Cipolletti</h3>
            <p className="font-serif text-lg">Río Negro</p>
            <p className="text-gray-500 text-sm italic">Av. Protección Ambiental 987</p>
            <div className="mt-6 text-black font-bold">0299-6667777</div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-12 shadow-2xl border-t-8 border-primary">
          <h2 className="text-3xl font-black uppercase mb-10">Enviar Mensaje Institucional</h2>
          <form className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="Nombre y Apellido" className="border-b-4 border-gray-100 p-4 outline-none focus:border-primary transition-colors font-serif italic text-lg" />
              <input type="email" placeholder="Correo Electrónico" className="border-b-4 border-gray-100 p-4 outline-none focus:border-primary transition-colors font-serif italic text-lg" />
            </div>
            <textarea placeholder="Motivo de su contacto..." rows="4" className="border-b-4 border-gray-100 p-4 outline-none focus:border-primary transition-colors font-serif italic text-lg resize-none"></textarea>
            <button className="bg-primary text-white font-black py-5 px-12 hover:bg-black transition-all uppercase tracking-[0.3em] shadow-lg self-start">
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;