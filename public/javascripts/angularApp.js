angular.module('agenda', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/template/home/home.html',
            controller: 'homeController',
            resolve: {
  				initial: function(contatoService) {
  					return contatoService.getContatos();
  				}
            }
    	}
    );
    
    $urlRouterProvider.otherwise('home');
});