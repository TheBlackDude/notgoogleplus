(function () {
	'use strict';

	angular.module('MainModule.routes')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		    .when('/', {
		    	controller: 'IndexCtrl',
		    	controllerAs: 'vm',
		    	templateUrl: '/static/templates/layout/index.html'
		    })
		    .when('/register', {
		    	templateUrl: '/static/templates/authentication/register.html',
		    	controller: 'RegisterCtrl',
		    	controllerAs: 'vm'
		    })
		    .when('/login', {
		    	templateUrl: '/static/templates/authentication/login.html',
		    	controller: 'LoginCtrl',
		    	controllerAs: 'vm'
		    })
		    .when('/+:username', {
		    	controller: 'ProfileCtrl',
		    	controllerAs: 'vm',
		    	templateUrl: '/static/templates/profiles/profile.html'
		    })
		    .when('/+:username/settings', {
		    	controller: 'ProfileSettingsCtrl',
		    	controllerAs: 'vm',
		    	templateUrl: '/static/templates/profiles/settings.html'
		    })
		    .otherwise('/');
	}]);
})();