angular.module('agenda')
.controller('listContatoController', function ($scope, initContato, contatoService, alertService, $uibModal) {
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

	$scope.alterar = function(index) {
		var modalInstance = $uibModal.open({
			templateUrl: '/template/modal/contato/alter.modal.html',
			controller: 'listContatoModalController',
			size: 'md',
			animation: true,
			resolve: {
				contato: function() {
					return $scope.contatos[index];
				}
			}
		});

		modalInstance.result.then(function() {
			contatoService.getContatos().success(function(data) {
				$scope.contatos = data;
			});
		});
	}

});