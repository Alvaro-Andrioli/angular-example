angular.module('agenda')
.config(function($stateProvider) {
	$stateProvider
        .state('cad-contato', {
            url: '/contato/cad',
            templateUrl: '/template/contato/cad.contato.html',
            controller: 'cadContatoController',
    	}
    );
});