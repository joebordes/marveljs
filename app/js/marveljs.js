'use strict';

angular.module('MarvelJSApp',
	[ 'ngRoute', 'MarvelJSApp.setup', 'ngSanitize', 'MarvelJSApp.filters', 'MarvelJSApp.services',
		'MarvelJSApp.directives', 'MarvelJSApp.controllers', 'angular-md5',
		'MarvelJSApp.controllers', 'MarvelJSApp.services', 'jm.i18next','ui.bootstrap','ngGrid'])
	.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/comics', {
			templateUrl : 'partials/comics.html',
			controller : 'comicsCtrl'
		});
		$routeProvider.when('/comics/:id', {
			templateUrl : 'partials/comic.html',
			controller : 'comicCtrl'
		});
		$routeProvider.when('/characters', {
			templateUrl : 'partials/characters.html',
			controller : 'characterCtrl'
		});
		$routeProvider.when('/config', {
			templateUrl : 'partials/config.html',
			controller : 'configCtrl'
		});
		$routeProvider.otherwise({
			redirectTo : '/comics'
		});
	}
	])
	.config(['Setup','$i18nextProvider', function (Setup, $i18nextProvider) {
    $i18nextProvider.options = {
        lng: Setup.language,
        useCookie: true,
        useLocalStorage: false,
        fallbackLng: 'en',
        resGetPath: 'locales/__lng__/translation.json',
        defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
    };
	}]);
