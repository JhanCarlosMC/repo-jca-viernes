//Funcion/metodo - Un conjunto de codigo el cual 
    //pueder ser reuilizado muchas veces con diferentes
    //datos.
function Sumar(numeroUno, numeroDos){
    let resultado = numeroUno + numeroDos;
    let mensajeFinal = "El resultado de la suma es: " + resultado;

    console.log(mensajeFinal);
}

const numeroUno = document.getElementById("numeroUno");

const btn = document.getElementById("sumar");
btn.addEventListener("click", function(){
    console.log(numeroUno.textContent);
    console.log(numeroUno);
    
})


//Registrar correo y celular cambiar la pagina
// Variables
// Capturar evento formulario
// DOM - Obtener informacion del DOM
// Condicion - If else
// DOM - Modificacion de la pagina (HTML)