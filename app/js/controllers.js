'use strict';

/* Controllers */

angular.module('MarvelJSApp.controllers', [])
.controller('navigationCtrl',function($scope, Setup, $i18next, $window, $location) {
	$scope.appname = Setup.app;
	$scope.messageurl = "http://marvel.com";
	$scope.messagetxt = "Data provided by Marvel. &copy; 2014 MARVEL";
	$(window).bind('resize', function() {
		if ($window.innerWidth < 768) {
			$scope.menuShow = false;
		} else {
			$scope.menuShow = true;
		}
		$scope.$apply();
	});
	$scope.menuShow = true;
	$scope.toggleMenu = function() {
		$scope.menuShow = !$scope.menuShow;
	};
	$scope.menuitems = [ {
		path: 'comics',
		faimg: 'fa-file-image-o',
		title: 'Comics'
	}, {
		path: 'characters',
		faimg: 'fa-female',
		title: 'Characters'
	}, {
		path: 'creators',
		faimg: 'fa-graduation-cap',
		title: 'Creators'
	}, {
		path: 'events',
		faimg: 'fa-eye',
		title: 'Events'
	}, {
		path: 'series',
		faimg: 'fa-trophy',
		title: 'Series'
	}, {
		path: 'stories',
		faimg: 'fa-video-camera',
		title: 'Stories'
	}, {
		path: 'config',
		faimg: 'fa-edit',
		title: 'Settings'
	}, {
		path: 'conclusion',
		faimg: 'fa-life-ring',
		title: 'Conclusion'
	} ];
	$scope.isActive = function (viewLocation) {
		var active = (viewLocation === $location.path());
		return active;
	};
})
.controller('characterCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice, $adConfig) {
		//$scope.gridOptions = {};
		$scope.characterList = [];
//		$scope.gridOptions = {
//			data: 'mvData',
//			rowHeight: 100,
//			columnDefs: [
//			{ field:'thumbnail', displayName: i18n.t('Image'),
//				cellTemplate: '<img src="{{row.getProperty(\'thumbnail\').path}}.{{row.getProperty(\'thumbnail\').extension }}" style="max-width:100px"/>',
//				width:100, height:100 },
//			{ field:'name', displayName: i18n.t('Character')},
//			{ field:'description', displayName: i18n.t('Description') }
//		]};
//		marvelAPIservice.getCharacters().success(function(response) {
//			$scope.characterList = response.data.results;
//		});
		$scope.comicsColumnDefSearch = [
		  {
			columnHeaderTemplate: '<em>Picture</em>',
			template: '<img class="thumbnail ad-margin-bottom-none" ng-src="{{thumbnail.path}}.{{thumbnail.extension}}">',
			width: '100px'
		  },
		  {
			columnHeaderDisplayName: 'Title',
			displayProperty: 'title'
		  }
		];
		$scope.comicsAjaxConfigSearch = marvelAPIservice.getComics();

		// live search implementation
		$scope.comicsSearchKey = $scope.comicsAjaxConfigSearch.params.title;
		$scope.searchComics = function () {
		  if ($scope.comicsSearchKey) {
			$scope.comicsAjaxConfigSearch.params.title = $scope.comicsSearchKey;
		  }
		};
})
.controller('creatorsCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
		$scope.creatorList = [];
		marvelAPIservice.getCreators().success(function(response) {
			$scope.creatorList = response.data.results;
		});

})
.controller('eventsCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice, DTOptionsBuilder, DTColumnBuilder) {
	//$scope.dtOptions = [];
//	marvelAPIservice.getEvents().success(function(response) {
//		console.log(response.data);
//		return response.data.results;
//	});
	//$scope.dtOptions = DTOptionsBuilder.fromSource(marvelAPIservice.getEvents).withPaginationType('full_numbers');
	//$scope.dtOptions = DTOptionsBuilder.fromFnPromise(marvelAPIservice.getEvents)
	//.withFnServerData(marvelAPIservice.getEvents)
	//	.withDataProp('data.results')
	//	.withPaginationType('full_numbers');
	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
	$scope.dtColumns = [
		DTColumnBuilder.newColumn('end').withTitle('Image'),
		DTColumnBuilder.newColumn('title').withTitle('title'),
		DTColumnBuilder.newColumn('description').withTitle('Description')
	];
	$scope.eventsList = [];
	marvelAPIservice.getEvents().success(function(response) {
		$scope.eventsList = response.data.results;
	});

})
.controller('seriesCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.seriesList = [];
	marvelAPIservice.getSeries().success(function(response) {
		$scope.seriesList = response.data.results;
	});
	$scope.predicates = ['title', 'description', 'thumbnail'];
	$scope.selectedPredicate = $scope.predicates[0];
})
.controller('storiesCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.storiesList = [];
	marvelAPIservice.getStories().success(function(response) {
		$scope.storiesList = response.data.results;
	});
})
.controller('conclusionCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.evaledList = [
	  {
		name: 'Tablesaw',
		url: 'http://filamentgroup.com/lab/tablesaw.html'
	  },
	  {
		name: 'angularjs_datatables',
		url: 'http://l-lin.github.io/angular-datatables/#/welcome'
	  },
	  {
		name: 'SmartTables',
		url: 'https://github.com/lorenzofox3/Smart-Table'
	  },
	  {
		name: 'trNgGrid',
		url: 'http://moonstorm.github.io/trNgGrid/release/'
	  },
	  {
		name: 'adapt_strap',
		url: 'http://adaptv.github.io/adapt-strap/',
	  }
	];
	$scope.conclusionList = {
		ajsnative: {
			Tablesaw: 0.2,
			angularjs_datatables: 0.5,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		responsive: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		inlineedit: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		customcell: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		paging: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		rest: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		search: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		easy: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		features: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		maturity: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		}
	  };
	var ob  = {};
	for(var rdos in $scope.evaledList){
		var ename =$scope.evaledList[rdos].name;
		var sum = 0;
		for (var vals in $scope.conclusionList) {
			sum = sum + $scope.conclusionList[vals][ename];
		}
		ob[ename] = sum;
	}
	$scope.resultSum = ob;
})
.controller('configCtrl',function($scope, Setup, $i18next, $filter) {
	$scope.langs = [ {
		name : i18n.t('English'),
		code : 'en'
	}, {
		name : i18n.t('Spanish'),
		code : 'es'
	}];
	var found = $filter('getById')($scope.langs, $i18next.options.lng, 'code');
	if (found!=null) {
		$scope.currentLang = found;
	} else {
		$scope.currentLang = $scope.langs[0];
	}
	$scope.mvpublickey = Setup.marvelPublicKey;
	$scope.mvprivatekey = Setup.marvelPrivateKey;
})
.controller('comicsCtrl',function($scope, marvelAPIservice, Setup, md5, $i18next) {
	$scope.nameFilter = null;
	$scope.comicsList = [];
	$scope.searchFilter = function(comic) {
		var keyword = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || keyword.test(comic.title)
				|| keyword.test(comic.series.name);
	};
	$scope.changeLanguage = function (lng) {
		$i18next.options.lng=lng.code;
	}

	marvelAPIservice.getComics().success(function(response) {
		// Dig into the responde to get the relevant data
		$scope.comicsList = response.data.results;
	});
})
.controller('comicCtrl', function($scope, $routeParams, marvelAPIservice, Setup, md5) {
	$scope.id = $routeParams.id;
	$scope.events = [];
	$scope.creators = [];
	$scope.comic = null;
	
	marvelAPIservice.getComicDetails($scope.id).success(function (response) {
		$scope.comic = response.data.results[0];
		$scope.creators = $scope.comic.creators.items;
	});
	//marvelAPIservice.getComicCreators($scope.id).success(function (response) {
	//	$scope.creators = response.MRData.RaceTable.Races; 
	//});
	//marvelAPIservice.getComicEvents($scope.id).success(function (response) {
	//	$scope.events = response.MRData.RaceTable.Races; 
	//});
});
