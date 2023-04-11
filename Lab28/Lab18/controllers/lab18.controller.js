const orden = require('../models/pedido.model');

exports.get_index = (request, response, next) => {
        response.render('index', {
            titulo: 'Menú de tacos',
            user: request.session.user || '',
            isLoggedIn: request.session.isLoggedIn || false,
        });
};

exports.get_preguntas = (request, response, next) => {
        response.render('preguntas', {
            titulo: 'Preguntas',
            user: request.session.user || '',
            isLoggedIn: request.session.isLoggedIn || false,
        });
};

exports.get_ordenar = (request, response, next) => {
        response.render('ordenar', {
            titulo: 'Ordenar',
            user: request.session.user || '',
            isLoggedIn: request.session.isLoggedIn || false,
            csrfToken: request.csrfToken(),
        });
};

exports.post_ordenar = (request, response, next) => {
    const id = request.params.id || 0;
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
        user: request.session.user || '',
    });
    norden.save(id);
    response.status(300).redirect('/Lab18/pedido');
};

exports.get_pedido = (request, response, next) => {
    const id = request.params.id || 0;
        orden.fetch(id).then(([rows, fieldData]) => {
            console.log(rows);
            response.render('pedido', {
                titulo: 'Pedido',
                ordenes: rows,
                user: request.session.user || '',
                isLoggedIn: request.session.isLoggedIn || false,
            });
        }).catch(err => console.log(err));
};

exports.get_modificar = (request, response, next) => {
    const id = request.params.id || 0;
        orden.fetch(id).then(([rows, fieldData]) => {
            console.log(rows);
            response.render('modificar', {
                titulo: 'Modificar',
                ordenes: rows,
                orden: rows[0],
                user: request.session.user || '',
                isLoggedIn: request.session.isLoggedIn || false,
                csrfToken: request.csrfToken(),
            });
        }).catch(err => console.log(err));
};

exports.post_modificar = (request, response, next) => {
    const id = request.params.id || 0;
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
            user: request.session.user || '',
        });
        norden.save(id);
        response.status(300).redirect('/lab18/pedido');

        exports.get_buscar = (request, response, next) => {
            orden.find(request.params.valor_busqueda).then(([rows, fieldData]) => {
                response.status(200).json({orden: rows});
            }).catch((error) => {
                console.log(error);
                response.status(500).json({message: "Internal Server Error"});
            });
        };
};