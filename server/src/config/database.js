const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://anderson.santanna:and0504@ds127825.mlab.com:27825/e-commerce', {userNewUrlParser: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio "
