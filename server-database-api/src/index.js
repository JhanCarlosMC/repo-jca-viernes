require('dotenv').config(); //Carga las variable de entorno

const express = require('express');
const conectarBD = require('./config/db.js');
const Producto = require('./models/Producto.js');

const app = express();

app.use(express.json());


app.get("/", (req, res) => {

    res.status(200)
    .json({mensaje: "La ejecucion de la API y la BD esta funcionando."});
});

//Endpoints
//Endpoint - GET/Obtener Productos
app.get("/productos", async (req, res) => {
    const productos = await Producto.find().sort({nombre:1});

    res.status(200).json(productos);
});

//Endpoint - GET/Obtener Producto por Id URL
app.get("/producto/:id", (req, res) => {

});

//Endpoint - POST/Crear Producto
app.post("/productos", async (req, res) => {
    const producto = await Producto.create(req.body);

    res.status(201).json(producto);
});

//Endpoint - PUT/Actualizar Producto
app.put("/producto/:id",(req, res) => {

});

//Endpoint - DELETE/Eliminar Producto
app.delete("/producto/:id",(req, res) => {

});

const PORT = process.env.PORT || 3000;

conectarBD().then(() => {
  app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
});