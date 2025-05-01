const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const pacienteRoutes = require('./routes/pacienteRoutes');
const medicoRoutes = require('./routes/medicoRoutes');
const citaRoutes = require('./routes/citaRoutes');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', pacienteRoutes);
app.use('/', medicoRoutes);
app.use('/', citaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});



