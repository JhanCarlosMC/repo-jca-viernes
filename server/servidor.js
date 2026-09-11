// Importa el módulo nativo http de Node.js
const http = require("http");


// Crea el servidor
const servidor = http.createServer((req, res) => {

  res.writeHead(
    200,{
      "Content-Type": "text/plain"
    });

  res.end(
    "¡Hola desde mi primer servidor con Node.js!"
  );

});


// Deja el servidor escuchando en el puerto 3000
servidor.listen(3000, () => {

  console.log(
    "Servidor corriendo en http://localhost:3000"
  );

});