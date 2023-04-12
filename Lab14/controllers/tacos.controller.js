const orden = require('../models/pedido.model');
const user = require('../models/usuarios.model');

exports.login = (request, response, next) => {
    response.render('login', {
        titulo: 'Login',
        users: user.fetchAll(),
        user: request.session.user || '',
    });
}

exports.post_login = (request, response, next) => {
    const user_nuevo = new user({
        username: request.body.username,
        password: request.body.password,
    });
    user_nuevo.save();
    request.session.user = user_nuevo.username;
    response.status(300).redirect('/tacos/');
};

exports.get_index = (request, response, next) => {
    if (request.session.user) {
        response.render('index', {
            titulo: 'Menú de tacos',
            users: user.fetchAll(),
            user: request.session.user || '',
        });
    } else {
        response.redirect('/tacos/login');
    }
};

/* exports.get_preguntas = (request, response, next) => {
    if (request.session.user) {
        response.render('preguntas', {
            titulo: 'Preguntas',
            users: user.fetchAll(),
            user: request.session.user || '',
        });
    } else {
        response.redirect('/tacos/login');
    }
}; */

exports.get_ordenar = (request, response, next) => {
    if (request.session.user) {
        response.render('ordenar', {
            titulo: 'Ordenar',
            users: user.fetchAll(),
            user: request.session.user || '',
        });
    } else {
        response.redirect('/tacos/login');
    }
};

exports.post_ordenar = (request, response, next) => {
    const norden = new orden({
        b: request.body.Bisteck,
        p: request.body.Pastor,
        ch: request.body.Chorizo,
        a: request.body.Asada,
        sucursal: request.body.Sucursal,
        bisteck: request.body.BisteckNumber,
        pastor: request.body.PastorNumber,
        chorizo: request.body.ChorizoNumber,
        asada: request.body.AsadaNumber,
        carnitas: request.body.CarnitasNumber,
        nombre: request.body.Nombre,
        direccion: request.body.Direccion,
        users: user.fetchAll(),
        user: request.session.user || '',
    });
    norden.save();
    response.status(300).redirect('/tacos/pedido');
};

exports.get_pedido = (request, response, next) => {
    if (request.session.user) {
        const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[2] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('pedido', {
        titulo: 'Pedido',
        ordenes: orden.fetchAll(),
        users: user.fetchAll(),
        user: request.session.user || '',
    });
    } else {
        response.redirect('/tacos/login');
    }
};
