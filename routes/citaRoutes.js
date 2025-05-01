const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.get('/citas', citaController.listarCitas);
router.get('/citas/nueva', citaController.mostrarFormulario);
router.post('/citas', citaController.crearCita);
router.get('/citas/editar/:id', citaController.editarCita);

module.exports = router;