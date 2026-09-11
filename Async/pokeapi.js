async function buscarPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        const datosPokemon = await respuesta.json();

        console.log("Nombre: " + datosPokemon.name)


    } catch (error) {
        console.log("Error: " + error);

    } finally {
        console.log("Finally: Proceso de busqueda finalizado");
        console.log("");

    }
}

buscarPokemon("Rayquaza");
buscarPokemon("eevee");
buscarPokemon("fuecoco");
buscarPokemon("charizard");
buscarPokemon("lucario");