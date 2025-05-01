const Medico = require('../models/medicoModel');

const mostrarMedicos = async (req, res) => {
  const medicos = await Medico.find();
  res.render('medicos/index', { medicos });
};

const mostrarFormularioAgregar = (req, res) => {
  res.render('medicos/agregar');
};

const agregarMedico = async (req, res) => {
  const nuevoMedico = new Medico(req.body);
  await nuevoMedico.save();
  res.redirect('/medicos');
};

const mostrarFormularioEditar = async (req, res) => {
  const medico = await Medico.findById(req.params.id);
  res.render('medicos/editar', { medico });
};

const actualizarMedico = async (req, res) => {
  await Medico.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/medicos');
};

const eliminarMedico = async (req, res) => {
  await Medico.findByIdAndDelete(req.params.id);
  res.redirect('/medicos');
};

module.exports = {
  mostrarMedicos,
  mostrarFormularioAgregar,
  agregarMedico,
  mostrarFormularioEditar,
  actualizarMedico,
  eliminarMedico
};
