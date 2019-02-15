const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

const categoria = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  }
});

module.exports = restful.model('Categoria', categoria);
