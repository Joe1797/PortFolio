import Face from "../../Icons/face";
import Linkedin from "../../Icons/linke";
import GitHub from "../../Icons/github";
import Mail from "../../Icons/mail";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="containerFooter">
      <ul className="containerIcons">
        <li>
          <a
            href="https://www.facebook.com/joel.gonzales.16940/"
            target="_blank"
          >
            <Face width="30px" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joel-fabrizio-gonzales-diaz-6ab9ba123/"
            target="_blank"
          >
            <Linkedin width="30px" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Joe1797" target="_blank">
            <GitHub width="30px" />
          </a>
        </li>
        <li>
          <a
            href="mailto:joelfabrizio17@gmail.com?Subject=Contacto%20de%20trabajo"
            target="_blank"
          >
            <Mail width="30px" />
          </a>
        </li>
      </ul>
      <div>
        <span>2023 - Joe</span>
      </div>
    </footer>
  );
}
