import foto from "/FOT lindekin sin fondo.png";
import "./Perfil.css";
export default function Perfil() {
  return (
    <section className="containerPerfil">
      <div className="containerFotoP">
        <img src={foto} alt="Foto Joe" />
      </div>
      <div className="containerInfoP">
        <h2>Hey! te cuento un poco de mi :)</h2>
        <span>
          Me encanta el mundo de la tecnología, y sobretodo el desarrollo web.
          Me capacite como FullStack Developer en Henry, tras escoger un nuevo
          rumbo dentro de lo que me apasiona!!!.
          <br />
          Tengo un background de Ingenieria Industrial donde labore por dos años
          y obtuve experiencia en la gestion de varios sectores.
          <br /> Actualmente busco brindar valor a proyectos con mis nuevas
          habilidades!
          <br />
        </span>
        <div>
          <h3>Mis Habilidades</h3>
          <div className="containerPSpan">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React js</span>
            <span>Redux js</span>
            <span>Express js</span>
            <span>Sequalize</span>
            <span>Node js</span>
            <span>Postgress</span>
            <span>TypeScript</span>
            <span>Figma</span>
            <span>SCRUM</span>
          </div>
        </div>
        <div>
          <h3>Mis Hobbies</h3>
          <div className="containerPSpan">
            <span>Nadar</span>
            <span>Escuchar Musica</span>
            <span>Codear Ideas</span>
            <span>Rutear en Moto</span>
          </div>
        </div>
        <div>
          <h3>Mi CV</h3>
          <a
            href="/CV-JOEL GONZALES DIAZ.pdf"
            download
            className="containerPSpan"
          >
            <button>Descargar CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}
