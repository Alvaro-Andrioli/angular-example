angular.module('agenda', ['ui.router'])
.config(function($urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');

})
.run(function($rootScope, VERSION) {
	$rootScope.VERSION = VERSION;
});