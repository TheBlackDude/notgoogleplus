(function () {
	'use strict';

	angular.module('authentication.services')
	.factory('Authentication', ['$cookies', '$http', function ($cookies, $http) {
		var Authentication = {
			register: register,
			login: login,
			logout: logout,
			getAuthenticatedAccount: getAuthenticatedAccount,
			setAuthenticatedAccount: setAuthenticatedAccount,
			isAuthenticated: isAuthenticated,
			unauthenticate: unauthenticate
		};

		function register (email,username,password) {
			var Email = email;
			var Password = password;
			return $http.post('/api/v1/accounts', {
				email: email,
				username: username,
				password: password
			}).then(registerSuccessFn, registerErrorFn);

			function registerSuccessFn (data, status, headers, config) {
			    Authentication.login(Email, Password);
		    }

		    function registerErrorFn (data, status, headers, config) {
			    console.error('Registration Failre!');
		    }
		}

		function login (email, password) {
			return $http.post('/api/v1/auth/login/', {
				email: email,
				password: password
			}).then(loginSuccessFn, loginErrorFn);

			function loginSuccessFn(data, status, headers, config) {
			    Authentication.setAuthenticatedAccount(data.data);

			    window.location = '/';
		    }

		    function loginErrorFn(data, status, headers, config) {
			    console.error('Login failure!', data.error);
		    }
		}

		function logout () {
			return $http.post('/api/v1/auth/logout/')
			    .then(logoutSuccessFn, logoutErrorFn);


			function logoutSuccessFn (data, status, headers, config) {
			    Authentication.unauthenticate();

			    window.location = '/';
		    }


		    function logoutErrorFn (data, status, headers, config) {
			    console.error('Logout Failure!', data.error);
		    }
		}

		function getAuthenticatedAccount() {
			if (!$cookies.authenticatedAccount) {
				return;
			}
			return JSON.parse($cookies.authenticatedAccount);
		}

		function isAuthenticated() {
			return !!$cookies.authenticatedAccount
		}

		function setAuthenticatedAccount(account) {
			$cookies.authenticatedAccount = JSON.stringify(account);
		}

		function unauthenticate() {
			delete $cookies.authenticatedAccount;
		}

		return Authentication

	}]);
})();