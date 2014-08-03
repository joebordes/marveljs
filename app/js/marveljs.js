'use strict';

angular.module('MarvelFeederApp',
	[ 'ngRoute', 'MarvelFeederApp.filters', 'MarvelFeederApp.services',
		'MarvelFeederApp.directives', 'MarvelFeederApp.controllers',
		'MarvelFeederApp.controllers', 'MarvelFeederApp.services', 'jm.i18next' ])
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
        lng: 'en',
        useCookie: false,
        useLocalStorage: false,
        fallbackLng: 'en',
        resGetPath: 'locales/__lng__/__ns__.json',
        defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
    };
	}]);
