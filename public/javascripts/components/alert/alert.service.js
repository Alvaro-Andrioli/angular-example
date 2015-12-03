angular.module('agenda')
.service('alertService', function($filter, $timeout) {
	var listAlert = [];

	function search(object, myArray){
	    for (var i=0; i < myArray.length; i++) {
	        if (myArray[i].type === object.type) {
	        	if (myArray[i].msg === object.msg) {
	        		if (myArray[i].title === object.title) {
	        			return i;
	        			break;
	        		}
	        	}
	        }
	    }
	}

	this.addAlert = function(alert) {
		switch($filter('uppercase')(alert.type)) {
			case 'SUCCESS':
				alert.type = 'alert-success';
			break;
			case 'DANGER':
				alert.type = 'alert-danger';
			break;
			case 'WARNING':
				alert.type = 'alert-warning';
			break;
			case 'INFO':
				alert.type = 'alert-info';
			break;
			default:
				alert.type = 'alert-info';
			break;
		}
		listAlert.push(alert);
		$timeout(function() {
			var i = search(alert, listAlert);
			listAlert.splice(i, 1);
		}, 5000);
	}

	this.closeAlert = function(index) {
		listAlert.splice(index, 1);
	}

	this.getAlerts = function() {
		return listAlert;
	}

});