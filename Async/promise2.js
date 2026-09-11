const promesaCocina = new Promise((resolve, reject) => {
    let platoPreparado = false;

    if(platoPreparado == true){
        //parte verdadera
        resolve("Su plato esta listo para entregar.");
    }else{
        //parte falsa
        reject("No hay ingredientes para su plato.");
    }
}, 2000);

async function esperarComida(){
    try {
        console.log("Esperando el pedido...");

        const response = await promesaCocina;

        console.log("Response: " + response);
    } catch(error) {
        console.log("Error: " + error);
    } finally {
        console.log("Finally: Finalizo el pedido");
    }
}

esperarComida();