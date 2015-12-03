angular.module('agenda')
.controller('cadContatoController', function ($scope, contatoService, alertService) {

	$scope.alerts = [];

	$scope.cadastrar = function() {
		if (angular.isDefined($scope.contato)) {
			if (angular.isDefined($scope.contato.nome)) {
				if (angular.empty($scope.contato.nome)) {
					alertService.addAlert({title: "Erro!", type:'danger', msg:'Campo nome obrigatório!'}); 
					return;
				}
			}

			if (angular.isDefined($scope.contato.telefone)) {
				if (angular.empty($scope.contato.telefone)) {
					alertService.addAlert({title: "Erro!", type:'danger', msg:'Campo telefone obrigatório!'}); 
					return;
				}
			}
		} else {
			return;
		}

		contatoService.addContato($scope.contato).success(function() {
			alertService.addAlert({title: "Sucesso!", type:'success', msg:'Cadastro Feito com sucesso!'});
		}).error(function() {
			alertService.addAlert({title: "Erro!", type:'danger', msg:'Erro ao cadastrar contato!'}); 
		});
	}
});