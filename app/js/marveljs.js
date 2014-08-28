'use strict';

angular.module('MarvelJSApp',
	[ 'ngRoute', 'MarvelJSApp.setup', 'ngSanitize', 'MarvelJSApp.filters', 'MarvelJSApp.services',
		'MarvelJSApp.directives', 'MarvelJSApp.controllers', 'angular-md5','datatables', 'smart-table',
		'MarvelJSApp.controllers', 'MarvelJSApp.services', 'jm.i18next','ui.bootstrap', 'trNgGrid', 'adaptv.adaptStrap'])
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
		$routeProvider.when('/creators', {
			templateUrl : 'partials/creators.html',
			controller : 'creatorsCtrl'
		});
		$routeProvider.when('/events', {
			templateUrl : 'partials/events.html',
			controller : 'eventsCtrl'
		});
		$routeProvider.when('/series', {
			templateUrl : 'partials/series.html',
			controller : 'seriesCtrl'
		});
		$routeProvider.when('/stories', {
			templateUrl : 'partials/stories.html',
			controller : 'storiesCtrl'
		});
		$routeProvider.when('/config', {
			templateUrl : 'partials/config.html',
			controller : 'configCtrl'
		});
		$routeProvider.when('/conclusion', {
			templateUrl : 'partials/conclusion.html',
			controller : 'conclusionCtrl'
		});
		$routeProvider.otherwise({
			redirectTo : '/comics'
		});
	}
	])
	.config(['$adConfigProvider', function ($adConfigProvider) {
		$adConfigProvider.paging = {
			request: {
				start: 'offset',
				pageSize: 'limit',
				//page: '',
				sortField: 'sort',
				sortDirection: 'sort_dir',
				sortAscValue: 'asc',
				sortDescValue: 'desc'
			},
			response: {
				itemsLocation: 'results',
				totalItems: 'totalCount'
			}
		};
		$adConfigProvider.iconClasses = {
			expand: 'glyphicon glyphicon-plus-sign',
			collapse: 'glyphicon glyphicon-minus-sign',
			loadingSpinner: 'glyphicon glyphicon-refresh ad-spin',
			firstPage: 'glyphicon glyphicon-fast-backward',
			previousPage: 'glyphicon glyphicon-backward',
			nextPage: 'glyphicon glyphicon-forward',
			lastPage: 'glyphicon glyphicon-fast-forward',
			sortAscending: 'glyphicon glyphicon-chevron-up',
			sortDescending: 'glyphicon glyphicon-chevron-down',
			sortable: 'glyphicon glyphicon-resize-vertical'
		}
	}])
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
