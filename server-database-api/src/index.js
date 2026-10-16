require('dotenv').config(); //Carga las variable de entorno

const cors = require('cors');
const express = require('express');
const conectarBD = require('./config/db.js');
const productosRoutes = require('./routes/productos.routes.js')
const manejarErrores = require('./middlewares/manejarErrores.js')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRoutes);
app.use(manejarErrores);
 
app.get("/", (req, res) => {
    res.status(200)
    .json({mensaje: "La ejecucion de la API y la BD esta funcionando."});
});


const PORT = process.env.PORT || 3000;

conectarBD().then(() => {
  app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
});