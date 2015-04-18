'use strict';

angular.module('MarvelJSApp',
	[ 'ngNewRouter', 'MarvelJSApp.setup', 'ngSanitize', 'MarvelJSApp.filters',
		'MarvelJSApp.directives', 'MarvelJSApp.controllers', 'angular-md5','ui.bootstrap',
		'MarvelJSApp.services', 'jm.i18next', 'trNgGrid'])
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
	.run(function ($rootScope, marvelAPIInvalidKeys, marvelAPIservice, $location, $router) {
		$router.config([ 
			{
				path: '/comics', 
				component : 'comics'
			},
			{
				path : 'partials/comic.html',
				controller : 'comicCtrl'
			},
			{
				path : '/characters',
				component : 'characters'
			},
			{
				path : '/creators',
				component : 'creators'
			},
			{
				path : '/events',
				component : 'events'
			},
			{
				path : '/series',
				component : 'series'
			},
			{
				path : '/stories',
				component : 'stories'
			},
			{
				path : '/config',
				component : 'config'
			},
			{
				path : '/conclusiongrid',
				component : 'conclusiongrid'
			},
			{
				path : '/conclusionrwd',
				component : 'conclusionrwd'
			},
			{
				path: '/',
				redirectTo : '/comics'
			}
		]);
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
