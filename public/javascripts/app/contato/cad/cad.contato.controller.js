angular.module('agenda')
.controller('cadContatoController', function ($scope, contatoService, alertService) {

	$scope.alerts = [];

	$scope.cadastrar = function() {
		contatoService.addContato($scope.contato).success(function() {
			alertService.addAlert({title: "Sucesso!", type:'success', msg:'Cadastro Feito com sucesso!'});
		}).error(function() {
			alertService.addAlert({title: "Erro!", type:'danger', msg:'Erro ao cadastrar contato!'}); 
		});
	}
});