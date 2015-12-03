angular.module('agenda')
.controller('listContatoController', function ($scope, initContato) {
	$scope.ordem = false;

	if (initContato.data.length > 0) {
		$scope.contatos = initContato.data;
	}

	$scope.ordenarPor = function(campo) {
		$scope.campo = campo;
		$scope.ordem = !$scope.ordem;
	}

	$scope.delete = function(index) {
		console.log($scope.contatos[index]);
	}
});