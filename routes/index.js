const express = require('express');

const accesoriosRouter = require('./accesorios.route');
const repuestosRouter = require('./repuestos.route');
const autosRouter = require('./autos.route');

function rutas(app) {
  app.get('/',(req, res)=> {
    res.send("API 'Es un Rasho es un mostruo' ACTIVAO 24/7")
   });
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/accesorios', accesoriosRouter); 
  router.use('/repuestos', repuestosRouter);
  router.use('/autos', autosRouter);
}
 
module.exports = rutas; 


