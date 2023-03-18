const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.post("/sendEmail", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  // Crear un objeto de transporte de correo electrónico
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "joelfabrizio17@gmail.com",
      pass: "vncmvdgcwbvdhvwv",
    },
  });

  // Crear un objeto con los detalles del correo electrónico
  const mailOptions = {
    from: "joelfabrizio17@gmail.com",
    to: "joel.gonzales@ucsp.edu.pe",
    subject: "Portfolio Joe",
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\n\nMensaje: ${message}`,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        message: "Ha ocurrido un error al enviar el correo electrónico",
      });
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res.json({
        message: "El correo electrónico ha sido enviado correctamente",
      });
    }
  });
});

server.listen(3000, () => {
  console.log("Server listening at 3000"); // eslint-disable-line no-console
});
