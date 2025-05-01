const mongoose = require('../db');
const Schema = mongoose.Schema;

const citaSchema = new Schema({
  idPaciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  idMedico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
  fechaHora: { type: Date, required: true },
  motivo: { type: String }
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;
