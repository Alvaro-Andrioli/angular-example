angular.module('agenda')
.directive('myAlert', function ($filter, alertService) {
	return {
		templateUrl: '/template/directives/alert/alert.html',
		restrict: 'E',
		replace: true,
		scope: {},
		controller: function($scope) {
			$scope.fechar = function(index) {
				alertService.closeAlert(index);
			}

			$scope.alerts = alertService.getAlerts();
		}
	};
});