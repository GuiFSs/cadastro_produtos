const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

const produto = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String, required: true },
  caracteristica: { type: Object, required: true },
  imagens: { type: [String], required: true },
  categoria: { type: Schema.Types.ObjectId, required: true },
  avaliacao: { type: Number, required: true },
  qtdEstoque: { type: Number, required: true }
});

module.exports = restful.model('Produto', produto);
