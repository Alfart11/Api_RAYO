const express = require('express');

const RepuestoService = require('../services/repuestos.service');
const controlValidar = require('../middlewares/validar.middleware');
const {
  crearRepuestoSchema,
  actualizarRepuestoSchema,
  findByRepuestoSchema,
  eliminarRepuestosSchema,
} = require('../schemas/repuesto.schemas');

const servicio = new RepuestoService();
const router = express.Router();

// GET --> Mostrar
router.get('/',async (req, res) => {
  const repuesto = await servicio.findAll();
  res.status(200).json(repuesto);
});

// POST --> Crear
router.post(
  '/',
  controlValidar(crearRepuestoSchema, 'body'),
  async (req, res) => {
    try {
      const body = await req.body;
      servicio.create(body);
      res.status(201).json({
        mensaje: 'Repuesto registrado con exito',
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
  controlValidar(actualizarRepuestoSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const repuesto = await servicio.update(id, body);
      res.status(200).json(repuesto);
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
  controlValidar(eliminarRepuestosSchema, 'params'),
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
  controlValidar(findByRepuestoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const repuesto = await servicio.findBy(id);
      res.json(repuesto);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

