angular.module('agenda')
.controller('listContatoController', function ($scope, initContato) {
	if (initContato.data.length > 0) {
		$scope.contatos = initContato.data;
	}
});