function main(){
    let nombrePersona = "Jhan carlos";
    let edad = 25;

    setTimeout(() => {
        trabajar(nombrePersona);
    },3000);

    console.log(nombrePersona + " tiene " + edad + " años")
}

function trabajar(persona){
    console.log(persona + " esta trabajando...");
}

main();