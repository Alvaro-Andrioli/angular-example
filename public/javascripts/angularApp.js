angular.module('agenda', ['ui.router', 'ui.bootstrap', 'ngMask'])
.config(function($urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');

})
.run(function($rootScope, VERSION) {
	$rootScope.VERSION = VERSION;
});