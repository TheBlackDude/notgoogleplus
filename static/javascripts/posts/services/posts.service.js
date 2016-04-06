(function () {
	'use strict';

	angular.module('posts.services')
	.factory('Posts', ['$http', function($http) {
		var Posts = {
			allPosts: [],
			allErrors: [],
			all: all,
			create: create,
			get: get
		};

		function all() {
			return $http.get('/api/v1/posts').success(function(data) {
				angular.copy(data, Posts.allPosts);
			}).error(function(err) {
				angular.copy(err, posts.allErrors);
			});
		}

		function create (content) {
			return $http.post('/api/v1/posts', {
				content: content
			});
		}

		function get (username) {
			return $http.get('/api/v1/accounts/' + username + '/posts/');
		}

		return Posts;
	}]);
})();