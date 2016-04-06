(function () {
	'use strict';

	angular.module('layout.controllers')
	.controller('NavbarCtrl', ['$scope', 'Authentication', function ($scope, Authentication) {
		var vm = this;

		vm.logout = logout;

		function logout () {
			Authentication.logout();
		}
	}]);
})();