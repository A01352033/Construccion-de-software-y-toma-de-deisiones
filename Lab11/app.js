const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const ruta_lab = require('./routes/lab11.routes.js');
app.use('/Lab11',ruta_lab);

const ruta_din = require('./routes/din.routes.js');
app.use('/din',ruta_din);

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404 - Page not found</h1>');
});

app.listen(3000);