(function () {
	'use strict';

	angular.module('layout.controllers')
	.controller('IndexCtrl', [
		'$scope',
		'Authentication',
		'Posts',
		'Snackbar',
		function($scope, Authentication, Posts, Snackbar) {
			var vm = this;

			vm.isAuthenticated = Authentication.isAuthenticated();
			
			activate();

			vm.posts = Posts.allPosts ? Posts.allPosts : Snackbar(Posts.allErrors);


			function activate() {
				Posts.all();
				//Posts.all().then(postsSuccessFn, postsErrorFn);

				$scope.$on('post.created', function(event, post) {
					vm.posts.unshift(post);
				});

				$scope.$on('post.created.error', function() {
					vm.posts.shift();
				});

				/*function postsSuccessFn(data, status, headers, config) {
				    vm.posts = data.data;
				    console.log('inner', vm.posts);
			    }

			    function postsErrorFn(data, status, headers, config) {
				    Snackbar.error(data.error);
			    }*/

			}

		}]);
})();