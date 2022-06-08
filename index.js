const express = require('express'); // "Somos Diosito y yo asi que nadie nos detiene!!!"
const rutas = require('./routes');

const aplicacion = express();

const port = 3500;
aplicacion.use(express.json());

aplicacion.listen(port, () =>{
  console.log("puerto activao " + port);
});

rutas(aplicacion);







