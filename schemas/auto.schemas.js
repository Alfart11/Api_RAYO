const { required } = require("joi");
const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string().alphanum().min(3).max(30);
const imagen = Joi.string();
const precio = Joi.number().integer().min(4);

const crearAutoSchema = Joi.object({
  nombre: nombre.required(),
  imagen: imagen.required(),
  precio: precio.required()
});

const actualizarAutoSchema = Joi.object({
  id : id.required(),
  nombre,
  imagen,
  precio
});

const eliminarAutosSchema = Joi.object({
  id : id.required()
});


const findByAutoSchema = Joi.object({
  id : id.required()
});

module.exports = {crearAutoSchema,actualizarAutoSchema,eliminarAutosSchema,findByAutoSchema};
