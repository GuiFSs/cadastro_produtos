const express = require('express')

module.exports = function(server){
    //API ROUTER
    const router = express.Router()
    server.use('/register', router)

    //Produtos routes
    const produtoService = require('../api/produto/produtoService')
    produtoService.register(router, '/product')
}