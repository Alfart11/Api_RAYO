function mostrarError(err,req,res,next){
  console.log("mostrarError");
  console.error(err);
  next(err);
}

function boomManejarError(err,req,res,next){
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function manejarError(err,req,res,next){
  res.status(500).json({
    mensaje: err.message,
    stack: err.stack
  })
}

module.exports = {mostrarError,manejarError,boomManejarError};
