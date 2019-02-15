const express = require('express');

module.exports = function(server) {
  //API ROUTER
  const router = express.Router();
  server.use('/api', router);

  //Produtos routes
  const produtoService = require('../api/produto/produtoService');
  produtoService.register(router, '/produto');

  //Categorias routes
  const categoriaService = require('../api/categoria/categoriaService');
  categoriaService.register(router, '/categoria');
};
