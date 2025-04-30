const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get('/', pacienteController.mostrarPacientes);
router.post('/pacientes', pacienteController.agregarPaciente);
router.get('/pacientes/agregar', pacienteController.mostrarFormularioAgregar);

router.get('/pacientes/editar/:id', pacienteController.mostrarFormularioEditar);
router.put('/pacientes/:id', pacienteController.actualizarPaciente);
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

module.exports = router;
