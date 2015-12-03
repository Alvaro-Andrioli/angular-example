angular.module('agenda')
.directive('myAlert', function ($filter) {
	return {
		templateUrl: '/template/directives/alert/alert.html',
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {
			close: '&',
			type: "@"
		},
		link: function (scope, iElement, iAttrs) {
			switch($filter('uppercase')(scope.type)) {
				case 'SUCCESS':
					iElement.addClass('alert-success');
				break;
				case 'DANGER':
					iElement.addClass('alert-danger');
				break;
				case 'WARNING':
					iElement.addClass('alert-warning');
				break;
				case 'INFO':
					iElement.addClass('alert-info');
				break;
				default:
					iElement.addClass('alert-info');
				break;
			}
		},
		controller: function($scope) {
			$scope.fechar = function() {
				$scope.close();
			}
		}
	};
});