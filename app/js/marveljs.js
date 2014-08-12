'use strict';

angular.module('MarvelJSApp',
	[ 'ngRoute', 'MarvelJSApp.setup', 'MarvelJSApp.filters', 'MarvelJSApp.services',
		'MarvelJSApp.directives', 'MarvelJSApp.controllers', 'angular-md5',
		'MarvelJSApp.controllers', 'MarvelJSApp.services', 'jm.i18next','ui.bootstrap'])
	.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/comics', {
			templateUrl : 'partials/comics.html',
			controller : 'comicsController'
		});
		$routeProvider.when('/comics/:id', {
			templateUrl : 'partials/comic.html',
			controller : 'comicController'
		});
		$routeProvider.otherwise({
			redirectTo : '/comics'
		});
	}
	])
	.config(['$i18nextProvider', function ($i18nextProvider) {
    $i18nextProvider.options = {
        //lng: 'en',
        useCookie: true,
        useLocalStorage: false,
        fallbackLng: 'en',
        resGetPath: 'locales/__lng__/translation.json',
        defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
    };
	}]);
