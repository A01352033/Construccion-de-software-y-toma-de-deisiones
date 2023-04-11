const express = require('express');
app.use(bodyParser.json());
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');

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

const csrfProtection = csrf();
app.use(csrfProtection);

//Middleware
app.use((request, response, next) => {
    next(); //Pasa al siguiente middleware
});

const userRoutes = require('./routes/usuarios.routes');
app.use('/users',userRoutes);

const lab18Routes = require('./routes/lab18.routes');
app.use('/lab18', isAuth, lab18Routes);


app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404</h1>');
});

app.listen(3000);