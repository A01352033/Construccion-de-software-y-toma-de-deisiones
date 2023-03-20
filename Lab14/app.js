const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //Guarda la sesion solo una vez
    saveUninitialized: false, // Guarda la sesion solo si se ha modificado
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    next(); //Pasa al siguiente middleware
});

const lab14Routes  = require('./routes/lab14.routes');
app.use('/lab14',lab14Routes );


app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>');
});

app.listen(3000);