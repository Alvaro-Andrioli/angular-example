angular.module('agenda')
.factory('contatoService', function ($http) {

	var _getContatos = function() {
		return $http.get('/contatos');
	}

	var _addContato = function(contato) {
		return $http.post('/add', contato);
	}

	var _removeContato = function(contato) {
		return $http.post('/delete', contato);	
	}

	var _updateContato = function(contato) {
		return $http.post('/update', contato);
	}

	return {
		getContatos: _getContatos,
		addContato: _addContato,
		removeContato: _removeContato,
		updateContato: _updateContato
	};
});