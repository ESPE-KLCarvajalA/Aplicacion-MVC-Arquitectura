const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.get('/citas', citaController.listarCitas);
router.get('/citas/agregar', citaController.mostrarFormulario);
router.post('/citas', citaController.crearCita);
router.get('/citas/editar/:id', citaController.editarCita);
router.put('/citas/:id', citaController.actualizarCita);
router.delete('/citas/:id', citaController.eliminarCita);

module.exports = router;
