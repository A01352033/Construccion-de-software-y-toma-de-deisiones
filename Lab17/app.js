const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac quam pretium, eleifend diam vitae, luctus est. Morbi blandit sagittis enim, vitae dapibus ex finibus eu. Sed metus orci, fermentum sodales imperdiet bibendum, feugiat sit amet sem.', 
    resave: false, //Guarda la sesion solo una vez
    saveUninitialized: false, // Guarda la sesion solo si se ha modificado
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    next(); //Pasa al siguiente middleware
});

const tacosRoutes  = require('./routes/tacos.routes');
app.use('/tacos',tacosRoutes );


app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>');
});

app.listen(3000);