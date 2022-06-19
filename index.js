const express = require('express'); // "Somos Diosito y yo asi que nadie nos detiene!!!"
const rutas = require('./routes');

const {manejarError,mostrarError,boomManejarError} = require("./middlewares/error.middleware");

const aplicacion = express();

const port = 3500;
aplicacion.use(express.json());

aplicacion.listen(port, () =>{
  console.log("puerto activao " + port);
});

rutas(aplicacion);

aplicacion.use(mostrarError);
aplicacion.use(boomManejarError);
aplicacion.use(manejarError);







