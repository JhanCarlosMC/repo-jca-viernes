const mongoose = require('mongoose');

async function conectarBD(){

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Se logro conectar a la BD de Mongo: " + mongoose.connection.name);
    } catch (error) {
        console.log("NO Se logro conectar a la BD de Mongo: ", error.message);
        process.exit(1);
    }

}

module.exports = conectarBD;