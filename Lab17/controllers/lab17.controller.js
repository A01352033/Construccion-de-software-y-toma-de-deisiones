const orden = require('../models/pedido.model');
const user = require('../models/usuarios.model');

exports.login = (request, response, next) => {
    user.fetchAll().then(([rows, fieldData]) => {
        response.render('login', {
            titulo: 'Login',
            users: rows,
            user: request.session.user || '',
        });
    }).catch(err => console.log(err));
}

exports.post_login = (request, response, next) => {
    const user_nuevo = new user({
        username: request.body.username,
        password: request.body.password,
    });
    user_nuevo.save();
    request.session.user = user_nuevo.username;
    response.status(300).redirect('/lab17/');
};

exports.get_index = (request, response, next) => {
    if (request.session.user) {
        response.render('index', {
            titulo: 'Menú de tacos',
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab17/login');
    }
};

exports.get_preguntas = (request, response, next) => {
    if (request.session.user) {
        response.render('preguntas', {
            titulo: 'Preguntas',
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab17/login');
    }
};

exports.get_ordenar = (request, response, next) => {
    if (request.session.user) {
        response.render('ordenar', {
            titulo: 'Ordenar',
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab17/login');
    }
};

exports.post_ordenar = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
    const norden = new orden({
        b: request.body.Bisteck,
        p: request.body.Pastor,
        ch: request.body.Chorizo,
        a: request.body.Asada,
        bisteck: request.body.BisteckNumber,
        pastor: request.body.PastorNumber,
        chorizo: request.body.ChorizoNumber,
        asada: request.body.AsadaNumber,
        carnitas: request.body.CarnitasNumber,
        nombre: request.body.Nombre,
        direccion: request.body.Direccion,
    });
    norden.save(id);
    response.status(300).redirect('/Lab17/pedido');
    } else {
        response.redirect('/lab17/login');
    }
};

exports.get_pedido = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        orden.fetch(id).then(([rows, fieldData]) => {
            console.log(rows);
            response.render('pedido', {
                titulo: 'Pedido',
                ordenes: rows,
                user: request.session.user || '',
            });
        }).catch(err => console.log(err));
    } else {
        response.redirect('/lab17/login');
    }
};

exports.get_modificar = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        orden.fetch(id).then(([rows, fieldData]) => {
            console.log(rows);
            response.render('modificar', {
                titulo: 'Modificar',
                ordenes: rows,
                orden: rows[0],
                user: request.session.user || '',
            });
        }).catch(err => console.log(err));
    } else {
        response.redirect('/lab17/login');
    }
};

exports.post_modificar = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        const norden = new orden({
            b: request.body.Bisteck,
            p: request.body.Pastor,
            ch: request.body.Chorizo,
            a: request.body.Asada,
            bisteck: request.body.BisteckNumber,
            pastor: request.body.PastorNumber,
            chorizo: request.body.ChorizoNumber,
            asada: request.body.AsadaNumber,
            carnitas: request.body.CarnitasNumber,
            nombre: request.body.Nombre,
            direccion: request.body.Direccion,
        });
        norden.save(id);
        response.status(300).redirect('/lab17/pedido');
    } else {
        response.redirect('/lab17/login');
    }
};