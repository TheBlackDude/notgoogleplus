(function () {
	'use strict';

	angular.module('posts.controllers')
	.controller('NewPostCtrl', NewPostCtrl);
	NewPostCtrl.$inject = ['$rootScope', '$scope', '$log', 'Authentication', 'Snackbar','Posts']
	function NewPostCtrl($rootScope, $scope, $log, Authentication, Snackbar, Posts) {
		$log.log('initializing', NewPostCtrl);
	   	var vm = this;

	   	vm.submit = submit;

	   	function submit() {
	   		$rootScope.$broadcast('post.created', {
	   			content: vm.content,
	   			author: {
	   				username: Authentication.getAuthenticatedAccount().username
	   			}
	   		});

	   		$scope.closeThisDialog();

	   		Posts.create(vm.content).then(createPostSuccessFn, createPostErrorFn);

	   		function createPostSuccessFn(data, status, headers, config) {
	   			Snackbar.show('Success! Post created.');
	   		}

	   		function createPostErrorFn(data, status, headers, config) {
	   			$rootScope.$broadcast('post.created.error');
	   			Snackbar.error(data.error);
	   		}
	   	}
	}
})();