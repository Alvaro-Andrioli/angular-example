angular.module('agenda')
.controller('cadContatoController', function ($scope, contatoService) {

	$scope.alerts = [];

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	}

	$scope.cadastrar = function() {
		contatoService.addContato($scope.contato).success(function() {
			$scope.alerts.push({type:'success', msg:'Cadastro Feito com sucesso!'});
		}).error(function() {
			$scope.alerts.push({type:'danger', msg:'Erro ao cadastrar contato!'}); 
		});
	}
});