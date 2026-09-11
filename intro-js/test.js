//Funcion/Metodo ???
    // Es un conjunto de codigo que podemos reutilizar.
    // Tiene un nombre por el cual se puede invocar.
    // Puede recibir o devolver informacion/variables.

function Sumar(numeroUno, numeroDos){
    //Codigo que se va a ejecutar
    let resultado = numeroUno + numeroDos;
    let mensajeFinal = "El resultado de la suma es: " + resultado;

    return mensajeFinal;
}

//Obtener un elemento del DOM por medio del ID
const tituloPrincipal = document.getElementById("titulo");
console.log(tituloPrincipal);

//Obtener un elemento del DOM por medio de la CLASS
//.querySelector() - Trae la primera coincidencia de la clase/etiqueta
const parrafo = document.querySelector(".parrafo");
console.log(parrafo);

//Agregar contenido de texto
parrafo.textContent = "Hola a todos desde el DOM";

const contenedor = document.querySelector("div");
//Agregar contenido/estructura html
contenedor.innerHTML = '<h3>Subtitulo Generado</h3> <a href="#">Enlace</a>';

//Modificar Estilos
tituloPrincipal.style.color = "#ff0000";
tituloPrincipal.style.fontSize = "50px";
tituloPrincipal.style.border = "2px solid black";