import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de componentes globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importación de páginas
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Afiliacion from './pages/Afiliacion';
import Contacto from './pages/Contacto';

// Botón de WhatsApp flotante (Visible en todas las páginas)
const WhatsAppBtn = () => (
  <a 
    href="https://wa.me/5492990000000?text=Hola!%20Deseo%20realizar%20una%20consulta%20al%20Sindicato." 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[100] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
    title="Contacto Directo"
  >
    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.406 0 6.558-5.332 11.89-11.888 11.89-1.941 0-3.853-.473-5.568-1.373l-6.516 1.703zm6.388-3.977l.312.185c1.428.847 3.081 1.295 4.773 1.295 4.88 0 8.854-3.974 8.854-8.854 0-2.364-.921-4.587-2.593-6.259s-3.896-2.593-6.261-2.593c-4.88 0-8.854 3.974-8.854 8.854 0 1.637.452 3.232 1.307 4.622l.204.331-1.01 3.69 3.792-.991z" />
    </svg>
  </a>
);

function App() {
  return (
    <Router>
      {/* Contenedor principal con flex-col y min-h-screen para que el footer siempre quede abajo */}
      <div className="flex flex-col min-h-screen selection:bg-black selection:text-primary">
        
        {/* El Navbar se mantiene fijo arriba */}
        <Navbar />

        {/* El área principal donde cambian las páginas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/afiliacion" element={<Afiliacion />} />
            <Route path="/contacto" element={<Contacto />} />
            
            {/* Redirección por si el usuario entra a una ruta que no existe */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* WhatsApp siempre presente */}
        <WhatsAppBtn />

        {/* Footer al final de todas las páginas */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;