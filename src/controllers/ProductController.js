const mongoose = require('mongoose'); //bd

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){ //async await
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 }); //await: próxima linha só executa depois de finalizada essa

        return res.json(products);
    }, 

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){ //req contem todos os dados da requisição
        //Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findById(req.params.id, req.body, {new: true}); //retorna o produto atualizado

        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};