//Cocina
const promesaCocina = new Promise((resolve, reject) => {
    let platoPreparado = true;

    if(platoPreparado == true){
        //parte verdadera
        resolve("Su plato esta listo para entregar.");
    }else{
        //parte falsa
        reject("No hay ingredientes para su plato.");
    }
}, 2000);

//El mesero entregando un pedido y tenindo su respuesta
promesaCocina
    .then((mensaje) => {
        //Solo se ejecuta cuando la respuesta es un Resolve
        console.log("Resolve:" + mensaje);
    })
    .catch((error) => {
        //Solo se ejecuta cuando la respuesta es un Reject
        console.log("Reject:" + error);
    })
    .finally(() => {
        //Se ejecuta siempre
        console.log("Finally: Finalizo el pedido");
    });
