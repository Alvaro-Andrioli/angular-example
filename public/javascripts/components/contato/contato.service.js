angular.module('agenda')
.factory('contatoService', function ($http) {

	var _getContatos = function() {
		return $http.get('/contatos');
	}

	var _addContato = function(contato) {
		return $http.post('/add', contato);
	}

	return {
		getContatos: _getContatos,
		addContato: _addContato
	};
});