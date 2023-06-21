const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate");

const DigimonSchema = mongoose.Schema({
    _id: String,
    nombre: String,
    url: String,
    descripcion: String,
    imagen: String,
    lstCaracteristicas: Array,
    lsAtaques: Array
}, {collection: 'Digimons'});

DigimonSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Digimon", DigimonSchema);