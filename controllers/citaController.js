const Cita = require('../models/citaModel');
const Paciente = require('../models/pacienteModel');
const Medico = require('../models/medicoModel');

const citaController = {
    listarCitas: async (req, res) => {
        try {
            const citas = await Cita.find()
                .populate('idPaciente', 'nombre apellido')
                .populate('idMedico', 'nombre especialidad');
            res.render('citas/index', { citas });
        } catch (err) {
            res.status(500).send('Error al obtener las citas');
        }
    },

    mostrarFormulario: async (req, res) => {
        try {
            const pacientes = await Paciente.find();
            const medicos = await Medico.find();
            res.render('citas/formulario', { pacientes, medicos, cita: null });
        } catch (err) {
            res.status(500).send('Error al cargar el formulario');
        }
    },

    crearCita: async (req, res) => {
        try {
            const { idPaciente, idMedico, fechaHora, motivo } = req.body;
            const nuevaCita = new Cita({ idPaciente, idMedico, fechaHora, motivo});
            await nuevaCita.save();
            res.redirect('/citas');
        } catch (err) {
            res.status(500).send('Error al guardar cita');
        }
    },

    editarCita: async (req, res) => {
        try {
            const cita = await Cita.findById(req.params.id)
                .populate('idPaciente', 'nombre apellido')
                .populate('idMedico', 'nombre especialidad');

            const pacientes = await Paciente.find();
            const medicos = await Medico.find();
            res.render('citas/formulario', { cita, pacientes, medicos });
        } catch (err) {
            res.status(500).send('Error al cargar la cita para editar');
        }
    },

    actualizarCita: async (req, res) => {
        try {
            const { idPaciente, idMedico, fechaHora, motivo } = req.body;
            await Cita.findByIdAndUpdate(req.params.id, { idPaciente, idMedico, fechaHora, motivo});
            res.redirect('/citas');
        } catch (err) {
            res.status(500).send('Error al actualizar cita');
        }
    },

    eliminarCita: async (req, res) => {
        try {
            await Cita.findByIdAndDelete(req.params.id);
            res.redirect('/citas');
        } catch (err) {
            res.status(500).send('Error al eliminar la cita');
        }
    }
};

module.exports = citaController;