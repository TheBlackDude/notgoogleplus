(function () {
	'use strict';

	angular.module('MainModule.posts', [
		'posts.controllers',
		'posts.directives',
		'posts.services'
	]);

	angular.module('posts.controllers', []);

	angular.module('posts.directives', ['ngDialog']);

	angular.module('posts.services', []);
})();