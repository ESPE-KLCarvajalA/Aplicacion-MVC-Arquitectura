const mongoose = require('../db');
const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: String, required: true, unique: true },
  fechaNacimiento: { type: Date, required: true },
  email: { type: String }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
