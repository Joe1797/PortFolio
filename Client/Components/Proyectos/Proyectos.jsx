import GitHub from "../../Icons/github";
import Rocket from "../../Icons/rocktet";
import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section className="containerProyectos">
      <div>
        <h2>Mis Proyectos</h2>
      </div>
      <div className="containerTarjetasP">
        <div className="containerTarjeta">
          <h3>LookingPlace</h3>
          <div className="containerImageProyect">
            <img
              src="https://img.freepik.com/premium-vector/backpack-traveler-couple-nature-cartoons-drawing-art_18591-60463.jpg?w=2000"
              alt="Imagen de Looking Place"
            />
          </div>
          <p>
            Un aplicativo web que permite realizar busqueda,filtrado y reservar
            alojamientos a aventureros!
            <br />
            Además se pueden ofrecer habitaciones como Hospedador, contando con
            su panel de gestión, creado de nuevas propiedades a rentar y gestión
            de comentarios!.
          </p>
          <div>
            <a
              href="https://github.com/felduque/lookingplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub width="35px" />
            </a>
            <a
              href="https://front-looking.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket width="35px" />
            </a>
          </div>
          <button>Más Info</button>
        </div>
        <div className="containerTarjeta">
          <h3>Pokedex</h3>
          <div className="containerImageProyect">
            <img
              src="https://img.lemde.fr/2022/12/22/5/0/1730/865/768/384/75/0/e968e4d_1671703423578-b5e.jpeg"
              alt="Imagen de Pokedex"
            />
          </div>
          <p>
            Un aplicativo web que realiza busqueda y filtrado de pokemons
            conectado a una API publica; además de DataBase para creación de
            nuevos Pokemons!.
          </p>
          <div>
            <a
              href="https://github.com/Joe1797/PI-Pokemon-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub width="35px" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Rocket width="35px" />
            </a>
          </div>
          <button>Más Info</button>
        </div>
      </div>
    </section>
  );
}
