const express = require("express");
const app = express();
app.use(express.json());

const productos = [
    { id: 1, nombre: "Gaseosa", precio: 8000 },
    { id: 2, nombre: "TV", precio: 1000000 },
    { id: 3, nombre: "Camisa", precio: 100000 },
    { id: 4, nombre: "Pizza", precio: 12000 }
]

//Endpoint raiz
app.get("/", (req, res) => {
    res.send("Hola desde el endpoint raiz de express.")
});

//Endpoint - GET/Obtener Productos
app.get("/productos", (req, res) => {
    res.status(201)
        .json(productos);
});

//Endpoint - GET/Obtener Producto por Id URL
app.get("/producto/:id", (req, res) => {
    const idProducto = Number(req.params.id);

    const productoEncontrado = productos.find(p => p.id === idProducto);

    if (productoEncontrado) {
        res.json(productoEncontrado);

    } else {
        res.status(404).json({error:"Producto no encontrado."})
    }
});

//Endpoint - POST/Crear Producto
app.post("/productos", (req, res) => {
    console.log(req.body);


    productos.push(req.body);

    res.status(201)
        .json({ mensaje: "Producto recibido"});

});

//Endpoint - PUT/Actualizar Producto
app.put("/producto/:id",(req, res) => {

    const idProducto = Number(req.params.id);

    const productoActualizar 
        = productos.find(p => p.id === idProducto);

    if(!productoActualizar){
        return res.status(404).json({error: "Producto no encontrado."})
    }

    productoActualizar.nombre = req.body.nombre;
    productoActualizar.precio = req.body.precio;

    res.json(productoActualizar);
});

//Endpoint - DELETE/Eliminar Producto
app.delete("/producto/:id",(req, res) => {

    const idProducto = Number(req.params.id);

    productos
        = productos.filter(p => p.id !== idProducto);

    if(!productoEliminar){
        return res.status(404).json({error: "Producto no encontrado."})
    }

    res.json({mensaje: "Producto Eliminado"});
});

//Servidor
app.listen(3000, () => {

    console.log("Servidor de express corriendo... http://localhost:3000/");

});