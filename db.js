const mongoose = require('mongoose');

// Cambia la URL de conexión con tu base de datos
const dbURI = 'mongodb://localhost:27017/clinicaDB';

mongoose.connect(dbURI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => {
    console.error('Error de conexión a MongoDB:', err);
    process.exit(1);
  });

module.exports = mongoose;
