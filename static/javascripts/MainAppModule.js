(function () {
	'use strict';

	angular.module('MainModule', [
		'MainModule.config',
		'MainModule.routes',
		'MainModule.authentication',
		'MainModule.layout',
		'MainModule.posts',
		'MainModule.utils',
		'MainModule.profiles'
		]);

	angular.module('MainModule.config', []);

	angular.module('MainModule.routes', ['ngRoute']);

	angular.module('MainModule.authentication', []);

	angular.module('MainModule.layout', []);

	angular.module('MainModule.posts', []);

	angular.module('MainModule.utils', []);

	angular.module('MainModule.profiles', []);
})();