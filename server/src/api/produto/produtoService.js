const produto = require('./produto')

produto.methods(['get', 'post', 'post', 'delete'])
produto.updateOptions({new: true, runValidators: true})

module.exports = produto