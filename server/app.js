require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const cors = require('cors');

const db = require("./database/models");

//Ejecuto el llamado a mis rutas
//const indexRouter = require('./routes/index');
//const lenguageRoutes = require('./routes/lenguageRoutes');
//const aspirantRoutes = require('./routes/aspirantRoutes');
//const areaRoutes = require('./routes/areaRoutes');
const apiAspirantesRouter = require('./routes/api/aspirantes');
const apiProfesionesRouter = require('./routes/api/profesiones');
// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

// Configuración de las rutas
app.use('/api/aspirantes', apiAspirantesRouter);
app.use('/api/profesiones', apiProfesionesRouter);
app.use('/api/sexos', apiSexosRouter);
//app.use('/', indexRouter);
//app.use('/lenguage', lenguageRoutes);
//app.use('/aspirant', aspirantRoutes);


//app.use('/experienceRoutes', experienceRoutes);
//app.use('/area', areaRoutes);

//Activando el servidor desde express
app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));