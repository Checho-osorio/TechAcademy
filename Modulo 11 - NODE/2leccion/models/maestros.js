'use stric'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaestrosSchema = Schema(
    {
        n_user: { type: Number, require: true, unique: true},
        nombre: { type: String, require: true},
        edad: { type: Number, require: true},
        genero: { type: String, require: true},
    }
);

module.exports = mongoose.model('maestros', MaestrosSchema)