const express = require('express'); //retorna uma função
const cors = require('cors');
const mongoose = require('mongoose'); //importando o mongoose
const requireDir = require('require-dir');

//Iniciando o App
const app = express(); //executa a função
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

//Rotas
app.use("/api", require("./src/routes")); //use: wildcard, vai receber todo tipo de requisição "/api/products"

app.listen(3001); //ouvir a porta 3001 do navegador
