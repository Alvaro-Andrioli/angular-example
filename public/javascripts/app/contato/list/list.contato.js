angular.module('agenda')
.config(function($stateProvider) {
	$stateProvider
        .state('list-contato', {
            url: '/contato/list',
            templateUrl: '/template/contato/list.contato.html',
            controller: 'listContatoController',
            resolve: {
            	initContato: function(contatoService) {
            		return contatoService.getContatos().success(function(data) {
            			return data;
            		});
            	}
            }
    	}
    );
    
});