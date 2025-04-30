const Paciente = require('../models/pacienteModel');

const mostrarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.render('index', { pacientes });
  } catch (error) {
    res.status(500).send('Error al obtener pacientes');
  }
};

const agregarPaciente = async (req, res) => {
  try {
    const nuevoPaciente = new Paciente({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula: req.body.cedula,
      fechaNacimiento: req.body.fechaNacimiento,
      email: req.body.email
    });
    await nuevoPaciente.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error al agregar paciente: ' + error.message);
  }
};

const mostrarFormularioAgregar = (req, res) => {
  res.render('paciente/agregar'); // Asegúrate de tener el archivo views/agregar.ejs
};


const mostrarFormularioEditar = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.render('paciente/editar', { paciente });
  } catch (error) {
    res.status(500).send('Error al cargar formulario de edición');
  }
};

const actualizarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula: req.body.cedula,
      fechaNacimiento: req.body.fechaNacimiento,
      email: req.body.email
    });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error al actualizar paciente');
  }
};

const eliminarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error al eliminar paciente');
  }
};

module.exports = {
  mostrarPacientes,
  agregarPaciente,
  mostrarFormularioAgregar,
  mostrarFormularioEditar,
  actualizarPaciente,
  eliminarPaciente
};
