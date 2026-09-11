//Variable:
    //  Es un lugar/espacio(Caja) en memoria que nos permite guardar informacion

// Inicializar
let nombreProfesor = "Jhan Carlos";
console.log("El nombre del profesor es " + nombreProfesor);

// JS - Debilmente Tipado
// JS - Lenguaje Interpretado

/* Tipos de datos
    1. Hola = Texto(String)
    2. 25 = Numero(Number - Integer)
    3. 10.5 = Numero(Number - Double)
    4. True/False = Logico(Boolen)
*/
//Declarar
let edadProfesor;

//Asignar
edadProfesor = 25;
console.log("La edad del profesor es " + edadProfesor);

//Constantes - Inicializan
const CEDULA = "1010101010";
console.log("Constante " + CEDULA);

//Operadores
// Aritmeticos  + - / * %(Modulo) **(Math.pow(b,e))

let resultado = 5/2;
console.log(resultado);

let resultadoModulo = 5%2;
console.log(resultadoModulo);

// Relacionales  < > <= >= != 
    // = Asignacion
    x = 2;
    console.log(x);
    // == Comparacion
    console.log(5 == 5);
    console.log(5 == "5");
    console.log("-----");
    // === Comparacion Estricta
    console.log(5 === 5);
    console.log(5 === "5");
    console.log("-----");

// Logicos  &&(AND)  ||(OR)  !(NOT)
console.log(5>2 && "HOla" == "J");
console.log(5>2 || "HOla" == "J");
console.log(!(5>2));

