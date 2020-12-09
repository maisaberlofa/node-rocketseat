const express = require('express'); //retorna uma função
const mongoose = require('mongoose'); //importando o mongoose
const requireDir = require('require-dir');

//Iniciando o App
const app = express(); //executa a função

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product'); //Acesso ao product para inserir/atualizar/deetar


//Primeira Rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    return res.send("Hello Rocketseat");
}); //rota, servidor fazendo requisição e recebendo resposta

app.listen(3001); //ouvir a porta 3001 do navegador
