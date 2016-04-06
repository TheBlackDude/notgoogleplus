(function (){
	'use strict';

	angular.module('profiles.services')
	.factory('Profile', ['$http', function($http) {
		var Profile = {
			destroy: destroy,
			get: get,
			update: update
		};

		function destroy(profile) {
			return $http.delete('/api/v1/accounts/' + profile);
		}

		function get (username) {
			return $http.get('/api/v1/accounts/' + username);
		}

		function update (profile) {
			return $http.put('/api/v1/accounts/' + profile.username, profile);
		}

		return Profile
	}]);
})();