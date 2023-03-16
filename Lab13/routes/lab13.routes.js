const express = require('express');
const path = require('path');
const router = express.Router();
const ControllerLab13 = require('../controllers/lab13.controller');

router.get('/', ControllerLab13.get_index);

router.get('/preguntas', ControllerLab13.get_preguntas);

router.get('/ordenar', ControllerLab13.get_ordenar);

router.post('/ordenar', ControllerLab13.post_ordenar);

router.get('/pedido', ControllerLab13.get_pedido);

module.exports = router;