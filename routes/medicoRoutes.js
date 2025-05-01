const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.get('/medicos', medicoController.mostrarMedicos);
router.get('/medicos/agregar', medicoController.mostrarFormularioAgregar);
router.post('/medicos', medicoController.agregarMedico);
router.get('/medicos/editar/:id', medicoController.mostrarFormularioEditar);
router.post('/medicos/editar/:id', medicoController.actualizarMedico);
router.post('/medicos/eliminar/:id', medicoController.eliminarMedico);

module.exports = router;
