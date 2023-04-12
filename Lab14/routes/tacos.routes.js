const express = require('express');
const path = require('path');
const router = express.Router();
const tacosController = require('../controllers/tacos.controller');
const userController = require('../controllers/usuarios.controller');

router.get('/', tacosController.get_index);

// router.get('/preguntas', tacosController.get_preguntas);

router.get('/ordenar', tacosController.get_ordenar);

router.post('/ordenar', tacosController.post_ordenar);

router.get('/pedido', tacosController.get_pedido);

router.get('/login', tacosController.login);

router.post('/login', tacosController.post_login);

router.get('/logout', userController.logout);

module.exports = router;