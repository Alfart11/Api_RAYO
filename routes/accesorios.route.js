const express = require('express');

const AccesorioService = require('../services/accesorios.service');
const controlValidar = require('../middlewares/validar.middleware');
const {
  crearAccesorioSchema,
  actualizarAccesorioSchema,
  findByAccesorioSchema,
  eliminarAccesoriosSchema,
} = require('../schemas/accesorio.schemas');

const servicio = new AccesorioService();
const router = express.Router();

// GET --> Mostrar
router.get('/',async (req, res) => {
  const accesorio = await servicio.findAll();
  res.status(200).json(accesorio);
});

// POST --> Crear
router.post(
  '/',
  controlValidar(crearAccesorioSchema, 'body'),
  async (req, res) => {
    try {
      const body = await req.body;
      servicio.create(body);
      res.status(201).json({
        mensaje: 'Accesorio registrado con exito',
        datos: body,
      });
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

// PUT --> Actualizar
router.put(
  '/:id',
  controlValidar(actualizarAccesorioSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const accesorio = await servicio.update(id, body);
      res.status(200).json(accesorio);
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

// DELETE --> Eliminar
router.delete(
  '/:id',
  controlValidar(eliminarAccesoriosSchema, 'params'),
  (req, res) => {
    try {
      const { id } = req.params;
      const salida = servicio.delete(id);
      res.json(salida);
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

router.get(
  '/:id',
  controlValidar(findByAccesorioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const accesorio = await servicio.findBy(id);
      res.json(accesorio);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

