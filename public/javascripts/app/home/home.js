angular.module('agenda')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/template/home/home.html',
			controller: 'homeController'
	});
    
    $urlRouterProvider.otherwise('home');
});