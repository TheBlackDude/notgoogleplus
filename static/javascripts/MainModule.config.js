(function () {
	'use strict';

	angular.module('MainModule.config')
	.config(['$locationProvider', function ($locationProvider) {
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	}])
	.run(['$http', function ($http) {
		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
		$http.defaults.xsrfCookieName = 'csrftoken';
	}]);
})();