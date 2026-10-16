 function manejarErrores(err, req, res, next){

    //1. Validaciones del Schema-Esquema
    if(err.name == "ValidationError"){
        const errores = Object.values(err.errors).map( e => e.message);
        return res.status(400).json(
            {error: "Datos Invalidos", detalle: errores})
    }

    //2. Elemento en URL con formato invalido
    if(err.name == "CastError"){
        return res.status(400).json(
            {error: "El valor " + err.value + " no es valido."}
        )
    }

    //3. Cualquier otro error
    console.error(err);
    res.status(500).json({error: "Error interno del servidor"})
 }

 module.exports = manejarErrores;