const boom = require("@hapi/boom");

function controlValidar(schema,objeto){
  return(req,res, next) => {
    const data = req[objeto];
    const { error } = schema.validate(data);
    if(error){
      throw boom.badRequest(error);
    }
    next();
  }
}

module.exports = controlValidar;
