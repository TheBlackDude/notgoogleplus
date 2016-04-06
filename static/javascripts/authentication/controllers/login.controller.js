(function () {
	'use strict';

	angular.module('authentication.controllers')
	.controller('LoginCtrl', ['$location', '$scope', 'Authentication', function($location, $scope, Authentication) {
		var vm = this;

		vm.login = login;

		activate();

		function activate() {
			// If the user is authenticated, they should not be here.
			if (Authentication.isAuthenticated()) {
				$location.url('/');
			}
		}

		function login () {
			Authentication.login(vm.email, vm.password);
		}
	}]);
})();