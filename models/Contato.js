var mongoose = require('mongoose');

var contatoSchema = new mongoose.Schema({
	nome: String,
	telefone: String 
});

mongoose.model('Contato', contatoSchema);
