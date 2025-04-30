const mongoose = require('../db');
const Schema = mongoose.Schema;

const medicoSchema = new Schema({
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  email: { type: String }
});

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
