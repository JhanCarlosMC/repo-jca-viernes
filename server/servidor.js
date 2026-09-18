//------------Importaciones------------
// Importa el módulo nativo http de Node.js
const http = require("http");
const url = require("url");

//------------Informacion------------
const listProductos = [
  { id: 1, nombre: "Gaseosa", precio: 8000 },
  { id: 2, nombre: "TV", precio: 1000000 },
  { id: 3, nombre: "Camisa", precio: 100000 },
  { id: 4, nombre: "Pizza", precio: 12000 }
]

//------------Funciones------------
function generadorContenido(list) {

  const contenido = list.map(
    (producto) => `
    <h3>${producto.id} - ${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>`
  ).join("");

  return `
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Productos</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        h1 { color: blue; }
        p { color: green; }
      </style>
    </head>
    <body>
      <h1>Página de productos</h1>
      ${contenido}
    </body>
  </html>
`;
}

//------------Servidor------------
// Crea el servidor
const servidor = http.createServer((req, res) => {
  console.log("Se Solicito: ", req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hola desde mi primer servidor con Node.js</h1>");

  } else if (req.url === "/productos") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(generadorContenido(listProductos));

  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Sobre Nosotros</h1>");

  } else if (req.url.startsWith("/producto")) {
    const partesUrl = url.parse(req.url, true);
    const nombreProducto = partesUrl.query.nombre;
    const productoEncontrado = listProductos.find((p) => p.nombre === nombreProducto);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Producto solicitado</h1>" +
        `<h3>${productoEncontrado.id} - ${productoEncontrado.nombre}</h3>
        <p>Precio: $${productoEncontrado.precio}</p>`
    ); 

  }else if(req.url === "/api/productos"){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(listProductos));

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Pagina no encontrada</h1>");

  }

});

//------------Ejecucion del servidor------------
// Deja el servidor escuchando en el puerto 3000
servidor.listen(3000, () => {
  console.log(
    "Servidor corriendo en http://localhost:3000"
  );

});