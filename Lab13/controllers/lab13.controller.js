const orden = require('../models/pedido.model');

exports.get_index = (request, response, next) => {
    response.render('index', {
        titulo: 'Menú de tacos',
    });
};

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas', {
        titulo: 'Preguntas',
    });
};

exports.get_ordenar = (request, response, next) => {
    response.render('ordenar', {
        titulo: 'Ordenar',
    });
};

exports.post_ordenar = (request, response, next) => {
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
    norden.save();
    response.status(300).redirect('/Lab13/pedido');
};

exports.get_pedido = (request, response, next) => {
    response.render('pedido', {
        titulo: 'pedido',
        ordenes: orden.fetchAll(),
        orden: orden.fetchAll()[orden.fetchAll().length - 1],
    });
};