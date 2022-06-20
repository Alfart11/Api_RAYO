const { required } = require("joi");
const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string().alphanum().min(3).max(30);
const imagen = Joi.string();
const precio = Joi.number().integer().min(4);

const crearRepuestoSchema = Joi.object({
  nombre: nombre.required(),
  imagen,
  precio: precio.required()
});

const actualizarRepuestoSchema = Joi.object({
  id : id.required(),
  nombre,
  imagen,
  precio
});

const eliminarRepuestosSchema = Joi.object({
  id : id.required()
});


const findByRepuestoSchema = Joi.object({
  id : id.required()
});

module.exports = {crearRepuestoSchema,actualizarRepuestoSchema,eliminarRepuestosSchema,findByRepuestoSchema};
