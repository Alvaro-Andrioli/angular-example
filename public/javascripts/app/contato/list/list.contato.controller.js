angular.module('agenda')
.controller('listContatoController', function ($scope, initContato, contatoService, alertService) {
	$scope.ordem = false;
	$scope.contatos = [];

	if (initContato.data.length > 0) {
		$scope.contatos = initContato.data;
	}

	$scope.ordenarPor = function(campo) {
		$scope.campo = campo;
		$scope.ordem = !$scope.ordem;
	}

	$scope.delete = function(index) {
		contatoService.removeContato($scope.contatos[index]).success(function() {
			alertService.addAlert({type: 'success', msg: 'Contato apagado com sucesso!'});
			contatoService.getContatos().success(function(data) {
				$scope.contatos = data;
			});
		}).error(function() {
			alertService.addAlert({type: 'danger', msg: 'Algo de errado aconteceu!'});
		});
	}

});