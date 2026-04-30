import React from 'react';

const Afiliacion = () => {
  // Función simple para scroll suave hasta el formulario
  const scrollToForm = () => {
    document.getElementById('form-afiliacion').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-serif">
      <header className="bg-primary py-20 px-8 text-center text-white border-b-8 border-black">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic">¿Qué gano yo afiliándome?</h1>
        <p className="text-black font-bold uppercase tracking-[0.2em] mt-4">La prevención empieza por cuidarnos entre nosotros</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
        <div className="space-y-8">
          <div className="bg-white p-8 shadow-xl border-t-8 border-black">
            <h3 className="font-black text-2xl uppercase italic mb-6 border-b border-gray-100 pb-2 text-primary">Respaldo Legal Específico</h3>
            <ul className="space-y-4 text-gray-700 italic">
              <li>• Inspecciones laborales (Qué firmar y qué no).</li>
              <li>• ART y Accidentes de trabajo.</li>
              <li>• Causas penales y civiles derivadas del ejercicio.</li>
              <li>• Defensa del criterio técnico ante pedidos irresponsables.</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 shadow-xl border-t-8 border-primary">
            <h3 className="font-black text-2xl uppercase italic mb-6 border-b border-gray-100 pb-2">Acompañamiento Gremial</h3>
            <ul className="space-y-4 text-gray-700 italic">
              <li>• Defensa ante despidos y sanciones injustificadas.</li>
              <li>• Protección ante presiones para firmar sin condiciones adecuadas.</li>
              <li>• Rechazo a decisiones empresariales inseguras.</li>
            </ul>
          </div>
        </div>

        {/* COLUMNA DERECHA: BENEFICIOS */}
        <div className="bg-black text-white p-10 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-primary font-black text-2xl uppercase mb-8 tracking-tighter italic text-center">Beneficios Exclusivos</h3>
            <ul className="space-y-6">
              <li className="border-b border-white/10 pb-4">
                <span className="text-primary font-bold block uppercase text-xs mb-2 tracking-widest">Biblioteca Digital</span>
                <p className="text-sm italic text-gray-400">Modelos de informes, actas, notas de deslinde y checklists legales listos para usar.</p>
              </li>
              <li className="border-b border-white/10 pb-4">
                <span className="text-primary font-bold block uppercase text-xs mb-2 tracking-widest">Alertas Normativas</span>
                <p className="text-sm italic text-gray-400">Notificaciones instantáneas vía WhatsApp/Telegram sobre cambios en leyes y decretos.</p>
              </li>
              <li>
                <span className="text-primary font-bold block uppercase text-xs mb-2 tracking-widest">Consultas Online</span>
                <p className="text-sm italic text-gray-400">Asesoramiento orientado online para resolver dudas técnicas urgentes.</p>
              </li>
            </ul>
          </div>
          <button 
            onClick={scrollToForm}
            className="mt-12 bg-primary text-white font-black py-5 px-8 uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(250,97,49,0.4)]"
          >
            Comenzar mi Afiliación
          </button>
        </div>
      </div>

      {/* --- SECCIÓN FORMULARIO --- */}
      <section id="form-afiliacion" className="max-w-4xl mx-auto px-6 mt-24">
        <div className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-primary relative overflow-hidden">
          {/* Marca de agua de fondo */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
             <img src="/images/logo/logo-nuevo-stp.png" alt="" className="w-64 h-auto" />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Solicitud de Afiliación</h2>
            <div className="w-20 h-1.5 bg-black mx-auto"></div>
            <p className="mt-4 text-gray-500 italic">Complete sus datos para que el equipo legal y gremial inicie su legajo.</p>
          </div>

          {/* FORMULARIO FORMSPREE */}
          <form 
            action="https://formspree.io/f/TU_ENDPOINT_AQUÍ" 
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans"
          >
            {/* Datos Personales */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Nombre Completo</label>
              <input type="text" name="nombre" required className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="Ej: Juan Pérez" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">DNI</label>
              <input type="text" name="dni" required className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="Sin puntos" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">WhatsApp / Teléfono</label>
              <input type="tel" name="telefono" required className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="299-XXXXXXX" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Email</label>
              <input type="email" name="email" required className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="correo@ejemplo.com" />
            </div>

            {/* Datos Laborales */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Título / Especialidad</label>
              <input type="text" name="titulo" required className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="Técnico / Licenciado" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Matrícula (Opcional)</label>
              <input type="text" name="matricula" className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="N° de Registro" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Empresa donde presta servicios / Situación actual</label>
              <input type="text" name="empresa" required className="border-b-2 border-gray-200 p-3 focus:border-primary outline-none transition-colors" placeholder="Ej: Monotributista / Empresa de servicios" />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-gray-400">Consulta o motivo de afiliación</label>
              <textarea name="mensaje" rows="4" className="border-2 border-gray-100 p-3 focus:border-primary outline-none transition-colors resize-none" placeholder="Cuéntenos su situación actual..."></textarea>
            </div>

            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                className="w-full bg-black text-white font-black py-5 uppercase tracking-[0.4em] text-sm hover:bg-primary transition-all shadow-xl"
              >
                Enviar Solicitud
              </button>
              <p className="text-[9px] text-center text-gray-400 mt-4 uppercase tracking-widest">
                Al enviar, acepta ser contactado por la secretaría del sindicato.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Afiliacion;