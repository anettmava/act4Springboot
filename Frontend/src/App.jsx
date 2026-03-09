//Router:	Envuelve la aplicación y gestiona la navegación.
//Routes:	Agrupa múltiples rutas y muestra solo la primera coincidencia.
//Route:	Define una URL específica y qué componente renderizar.

//Instala lo siguiente
//npm install sockjs-client stompjs


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar/Navbar";
import Dashbord from "./pages/mainPages/Formulary";
import About from "./pages/mainPages/About";
import Home from "./pages/mainPages/Home";

function Default() {
  return (
    <div style={{ padding: 32 }}>
      <h1>404 — Página no encontrada</h1>
      <p>
        Regresa a <a href="/">Home</a>.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* Barra de navegación */}
        <Navbar />
        {/* Contenido de la página */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
