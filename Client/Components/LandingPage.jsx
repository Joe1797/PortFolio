import "./LandingPage.css";
import PostGress from "../Icons/postgress";
import Express from "../Icons/express";
import ReactIcon from "../Icons/reactIcon";
import NodeIcon from "../Icons/nodeIcon";

export default function LandingPage() {
  return (
    <main className="containerLP">
      <h1 className="h1LP">HOLA 👋 SOY JOEL GONZALES</h1>
      <h4>PUEDES DECIRME JOE!</h4>
      <h3>Soy FullStack Web Developer con experiencia en el stack PERN</h3>
      <h4>Dispuesto a asumir nuevos retos, listo para la aventura!</h4>
      <ul>
        <li>
          <PostGress width="60px" />
        </li>
        <li>
          <Express width="60px" />
        </li>
        <li>
          <ReactIcon width="60px" />
        </li>
        <li>
          <NodeIcon width="60px" />
        </li>
      </ul>
    </main>
  );
}
