const { Router } = require('express');
const Producto = require('../models/Producto.js');

const router = Router();

//Endpoints

//Endpoint - GET/Obtener Productos
router.get("/", async (req, res) => {
    const productos = await Producto.find().sort({nombre:1});

    res.status(200).json(productos);
});

//Endpoint - POST/Crear Producto
router.post("/", async (req, res) => {
    const producto = await Producto.create(req.body);

    res.status(201).json(producto);
});

//Enpoint - PUT/Actualizar Producto
router.put("/:id", async (req, res) => {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body);

    if(!producto)
        return res.status(404).json({error: "producto no encontrado"});
    
    res.json(producto);
    
});

//Enpoint - DELETE/Eliminar producto
router.delete("/:id", async (req, res) => {
    const producto = await Producto.findByIdAndDelete(req.params.id);

    if(!producto)
        return res.status(404).json({error: "producto no encontrado"});

    res.status(204).json(producto);
});


module.exports = router;