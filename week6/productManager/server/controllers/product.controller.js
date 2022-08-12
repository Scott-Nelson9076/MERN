const { response, request } = require('express');
const Product = require('../models/product.model');


module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err));
}

module.exports.getAllProds = (req,res) => {
    Product.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

module.exports.getAProd = (req,res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.deleteProd = (req,res) => {
    Product.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updateProd = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(changedProd => res.json(changedProd))
        .catch(err => res.json(err))
}