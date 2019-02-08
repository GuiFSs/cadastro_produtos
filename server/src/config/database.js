const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/ecommerce', {userNewUrlParser: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio "
