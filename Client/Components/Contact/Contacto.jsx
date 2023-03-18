import { useState } from "react";
import axios from "axios";
import "./Contacto.css";

export default function Contacto() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    asunto: "",
    message: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/sendEmail", {
      name: inputs.name,
      email: inputs.email,
      message: `${inputs.asunto} --- ${inputs.message}`,
    });
    console.log(res.data);
  };

  return (
    <div>
      <h3 className="contactoH3">Ponte en contacto conmigo!</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="containerProp">
          <label htmlFor="name">
            Nombre <span>*</span>
          </label>

          <input
            placeholder="  Ingrese su nombre"
            id="name"
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="containerProp">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            placeholder="  Ingrese su email"
            id="email"
            name="email"
            type="text"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="containerProp">
          <label htmlFor="asunto">
            Asunto <span>*</span>
          </label>
          <input
            placeholder="  Ingrese el asunto"
            id="asunto"
            name="asunto"
            type="text"
            value={inputs.asunto}
            onChange={handleChange}
          />
        </div>
        <div className="containerProp">
          <label htmlFor="message">
            Mensaje <span>*</span>
          </label>
          <input
            placeholder="  Ingrese su mensaje"
            id="message"
            name="message"
            type="text"
            value={inputs.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
