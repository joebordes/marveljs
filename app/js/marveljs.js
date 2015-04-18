'use strict';

angular.module('MarvelJSApp',
	[ 'ngRoute', 'MarvelJSApp.setup', 'ngSanitize', 'MarvelJSApp.filters',
		'MarvelJSApp.directives', 'MarvelJSApp.controllers', 'angular-md5','ui.bootstrap',
		'MarvelJSApp.services', 'jm.i18next', 'trNgGrid'])
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
		$routeProvider.when('/conclusiongrid', {
			templateUrl : 'partials/conclusiongrid.html',
			controller : 'conclusionCtrl'
		});
		$routeProvider.when('/conclusionrwd', {
			templateUrl : 'partials/conclusionrwd.html',
			controller : 'conclusionrwdCtrl'
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
	}])
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('marvelAPIInterceptor');
	})
	.run(function ($rootScope, marvelAPIInvalidKeys, marvelAPIservice, $location) {
		$rootScope.$on('$routeChangeStart', function (ev, next, curr) {
		  if (next.$$route) {
			if (!marvelAPIservice.isConfigured() || marvelAPIInvalidKeys.hasInvalidKeys()) {
				$location.path('/config');
			}
		  }
		});
		/*
		TrNgGrid.tableCssClass = "tr-ng-grid table table-bordered table-hover";
	    TrNgGrid.cellCssClass = "tr-ng-cell";
	    TrNgGrid.headerCellCssClass = "tr-ng-column-header " + TrNgGrid.cellCssClass;
	    TrNgGrid.bodyCellCssClass = cellCssClass;
	    TrNgGrid.columnTitleCssClass = "tr-ng-title";
	    TrNgGrid.columnSortCssClass = "tr-ng-sort";
	    TrNgGrid.columnFilterCssClass = "tr-ng-column-filter";
	    TrNgGrid.columnFilterInputWrapperCssClass = "";
	    TrNgGrid.columnSortActiveCssClass = "tr-ng-sort-active text-info";
	    TrNgGrid.columnSortInactiveCssClass = "tr-ng-sort-inactive text-muted";
	    TrNgGrid.columnSortReverseOrderCssClass = "tr-ng-sort-order-reverse glyphicon glyphicon-chevron-up";
	    TrNgGrid.columnSortNormalOrderCssClass = "tr-ng-sort-order-normal glyphicon glyphicon-chevron-down";
	    TrNgGrid.rowSelectedCssClass = "active";
	    TrNgGrid.footerCssClass = "tr-ng-grid-footer form-inline";
	    */
	})
;
