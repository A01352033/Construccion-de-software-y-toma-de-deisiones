const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutas_lab12 = require('./routes/lab12.routes');
app.use('/Lab12',rutas_lab12);


app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404 - Page not found</h1>');
});

app.listen(3000);