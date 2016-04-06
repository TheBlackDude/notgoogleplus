(function () {
	'use strict';

	angular.module('posts.directives')
	.directive('posts', [function() {
		var directive = {
			controller: 'PostsCtrl',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				posts: '='
			},
			templateUrl: '/static/templates/posts/posts.html'
		};

		return directive;
	}]);
})();