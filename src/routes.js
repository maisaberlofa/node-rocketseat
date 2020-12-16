const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Primeira Rota
routes.get('/products', ProductController.index); //rota, servidor fazendo requisição e recebendo resposta
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store); //criar
routes.put('/products/:id', ProductController.update); //atualizar
routes.delete('/products/:id', ProductController.destroy); //deletar

module.exports = routes;