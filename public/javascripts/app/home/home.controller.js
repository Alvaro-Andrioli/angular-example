angular.module('agenda')
.controller('homeController', function($scope, initial, contatoService) {
	
	$scope.contatos = initial.data;

	$scope.buscarContatos = function() {
		contatoService.getContatos().success(function(data) {
			$scope.contatos = data;
		});
	}

	$scope.salvarContato = function() {
		if (angular.isDefined($scope.contato)) {
			if ($scope.contato.nome.length == 0 || $scope.contato.telefone.length == 0) {
				alert('campos não definidos corretamente');
				return;
			}

			contatoService.addContato($scope.contato).success(function() {
				$scope.buscarContatos();
				$scope.contato.nome = "";
				$scope.contato.telefone = "";
			});
		} else {
			alert('contato não definido');
		}
	}

});