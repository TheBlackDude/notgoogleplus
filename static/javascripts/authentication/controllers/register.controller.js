(function () {
	'use strict';

	angular.module('authentication.controllers')
	.controller('RegisterCtrl', ['$location', '$scope', 'Authentication', function ($location, $scope, Authentication){
		var vm = this;

		vm.register = register;

		activate();

		function activate () {
			// If the user is authenticated, they should not be here.
			if (Authentication.isAuthenticated()) {
				$location.url('/');
			}
		}

		function register () {
			Authentication.register(vm.email,vm.username,vm.password);
		}
	}]);
})();