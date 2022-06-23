const express = require('express');
const controlValidar = require('../middlewares/validar.middleware');
const {
  crearAdministradorSchema,
  actualizarAdministradorSchema,
  findByAdministradorSchema,
} = require('../schemas/administrador.schema');
const administradorService = require('../services/administrador.service');
const servicio = new administradorService();
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const Administrador = await servicio.findAll();
    res.status(200).json(Administrador);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  controlValidar(crearAdministradorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const administrador = await servicio.create(body);
      res.status(201).json({
        mensaje: 'registro exitoso',
        datos: administrador,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  controlValidar(actualizarAdministradorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = {
        id: id,
        ...req.body,
      };
      const Administrador = await servicio.update(id, body);
      res.status(200).json({
        mensaje: 'Administrador actualizado',
        datos: Administrador,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  controlValidar(actualizarAdministradorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = {
        id: id,
        ...req.body,
      };
      const Administrador = await servicio.update(id, body);
      res.status(200).json({
        mensaje: 'Admin parcialmente actualizado',
        datos: Administrador,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  controlValidar(findByAdministradorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const AdministradorEliminado = await servicio.delete(id);
      res.status(200).json({
        mensaje: 'perfil del administrador eliminado',
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  controlValidar(findByAdministradorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Administrador = await servicio.findBy(id);
      res.json(Administrador);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
