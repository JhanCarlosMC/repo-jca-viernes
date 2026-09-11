const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");

const botonCambiarContenido = document.getElementById("btnCambiarTexto");

//Creacion del evento
botonCambiarContenido.addEventListener("click", function (){
    titulo.textContent = "Titulo cambiado por evento en js";
    descripcion.textContent = "El JS fue el encargado de agregar este contenido";
});

//Cabmmiar color titulo
const botonCambiarEstilos = document.querySelector("#btnCambiarColor");

botonCambiarEstilos.addEventListener("click", function (){
    titulo.style.backgroundColor = "red";
    titulo.style.color = "#fff";
    titulo.style.fontSize = "40px";
});

const botonCambioClase = document.getElementById("btnClase");
//Mouseover - poner en mouse encima
//Mouseout - sale el mouse del elemento
botonCambioClase.addEventListener("click", function(){
    titulo.classList.toggle("destacado");
});

const mensajeOculto = document.getElementById("mensajeOculto");
const btnMostrarOcultar = document.getElementById("btnMostrarOcultar");

btnMostrarOcultar.addEventListener("click", function (){
    mensajeOculto.classList.toggle("oculto");
});

const inputNombre = document.getElementById("nombre");
const btnSaludar = document.getElementById("btnSaludar");
const saludo = document.getElementById("saludo");

btnSaludar.addEventListener("click", function (){
    const nombreUsuario = inputNombre.value;

    saludo.textContent = "Hola "+ nombreUsuario + " Como estas?";
});

const textoTiempoReal = document.getElementById("textoTiempoReal");
const resultadoTiempoReal = document.getElementById("resultadoTiempoReal");

textoTiempoReal.addEventListener("input", function (){
        resultadoTiempoReal.textContent = textoTiempoReal.value;
});

textoTiempoReal.addEventListener("keydown", function (event){
    if(event.code == "Enter"){
        console.log(e.code);
        resultadoTiempoReal.textContent = textoTiempoReal.value;
    }
});