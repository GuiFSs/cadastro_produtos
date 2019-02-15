const categoria = require('./categoria');

categoria.methods(['get', 'post', 'put', 'delete']);
categoria.updateOptions({ new: true, runValidators: true });

module.exports = categoria;
