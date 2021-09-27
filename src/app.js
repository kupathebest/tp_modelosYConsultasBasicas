require('dotenv').config()
const express = require('express');
const path = require('path');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const dbConnectionTest = require('./utils/dbConnectionTest');
const db = require('./database/models');
const methodOverride = require('method-override')
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
dbConnectionTest()


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
