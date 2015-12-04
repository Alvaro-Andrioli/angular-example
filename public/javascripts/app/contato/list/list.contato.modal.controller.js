angular.module('agenda')
.controller('listContatoModalController', function ($scope, contato, contatoService ,$uibModalInstance) {
	
	$scope.alterContato = angular.copy(contato);

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}

	$scope.send = function() {
		contatoService.updateContato($scope.alterContato).success(function() {
			$uibModalInstance.close("");
		});
	}
});