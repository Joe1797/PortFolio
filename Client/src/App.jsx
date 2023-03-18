//Importando Componentes
import NavBar from "../Components/NavBar";
import LandingPage from "../Components/LandingPage";
import Perfil from "../Components/Perfil/Perfil";
import Proyectos from "../Components/Proyectos/Proyectos";
import Contacto from "../Components/Contact/Contacto";
import NotFound from "../Components/NotFound";
import "./App.css";
//React Router DOM
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div className="containerApp">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/miPerfil" element={<Perfil />}></Route>
          <Route path="/proyectos" element={<Proyectos />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
