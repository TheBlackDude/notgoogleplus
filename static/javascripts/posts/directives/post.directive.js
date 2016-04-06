(function () {
	'use strict';

	angular.module('posts.directives')
	.directive('post', [function() {
		var directive = {
			restrict: 'E',
			scope: {
				post: '='
			},
			templateUrl: '/static/templates/posts/post.html'
		};

		return directive;
	}]);
})();