const Paciente = require('../models/pacienteModel');

const mostrarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.render('index', { pacientes });
  } catch (error) {
    res.status(500).send('Error al obtener pacientes');
  }
};

module.exports = {
  mostrarPacientes
};
