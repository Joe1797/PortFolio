import { Link } from "react-router-dom";
import "./NavBar.css";
import logoW from "../src/assets/joe-logo.png";

export default function NavBar() {
  return (
    <>
      <div className="containerImg">
        <Link to="/" className="linkNav">
          <img className="imgNav" src={logoW} alt="Logo Joel" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="ulNav">
          <Link to="/miPerfil" className="linkNav">
            <li>Acerca de Mi</li>
          </Link>
          <Link to="/proyectos" className="linkNav">
            <li>Proyectos</li>
          </Link>
          <Link to="/contacto" className="linkNav">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
