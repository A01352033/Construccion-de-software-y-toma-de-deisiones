const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index', {
        titulo: 'Menu de tacos',
    });
});

router.get('/preguntas', (request, response, next) => {
    response.render('preguntas', {
        titulo: 'Preguntas',
    });
});

router.get('/ordenar', (request, response, next) => {
    response.render('ordenar', {
        titulo: 'Ordenar',
    });
});

router.post('/ordenar', (request, response, next) => {
    response.render('pedido', {
        titulo: 'Pedido realizado con exito!!',
        b: request.body.Bisteck,
        p: request.body.Pastor,
        ch: request.body.Chorizo,
        a:request.body.Asada,
        bisteck: request.body.BisteckNumber,
        pastor: request.body.PastorNumber,
        chorizo: request.body.ChorizoNumber,
        asada:request.body.AsadaNumber,
        carnitas: request.body.CarnitasNumber,
        nombre: request.body.Nombre,
        direccion: request.body.Direccion,
    });
});

module.exports = router;