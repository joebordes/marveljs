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
.controller('characterCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.characterList = [];
	$scope.myPageItemsCount = 0;
	$scope.myItemsTotalCount = 0;
	marvelAPIservice.getCharacters().success(function(response) {
		$scope.myPageItemsCount = response.data.count;
		$scope.myItemsTotalCount = response.data.total;
		$scope.characterList = response.data.results;
	});
	$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getCharacters(currentPage * pageItems, pageItems).success(function(response) {
			$scope.myPageItemsCount = response.data.count;
			$scope.myItemsTotalCount = response.data.total;
			$scope.characterList = response.data.results;
		});
	}
	$scope.mySelectedItems = [];
	$scope.watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
})
.controller('creatorsCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.creatorList = [];
	$scope.myPageItemsCount = 0;
	$scope.myItemsTotalCount = 0;
	marvelAPIservice.getCreators().success(function(response) {
		$scope.myPageItemsCount = response.data.count;
		$scope.myItemsTotalCount = response.data.total;
		$scope.creatorList = response.data.results;
	});
	$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getCreators(currentPage * pageItems, pageItems).success(function(response) {
			$scope.myPageItemsCount = response.data.count;
			$scope.myItemsTotalCount = response.data.total;
			$scope.creatorList = response.data.results;
		});
	}
	$scope.mySelectedItems = [];
	$scope.watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
})
.controller('eventsCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.eventsList = [];
	$scope.myPageItemsCount = 0;
	$scope.myItemsTotalCount = 0;
	marvelAPIservice.getEvents().success(function(response) {
		$scope.myPageItemsCount = response.data.count;
		$scope.myItemsTotalCount = response.data.total;
		$scope.eventsList = response.data.results;
	});
	$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getEvents(currentPage * pageItems, pageItems).success(function(response) {
			$scope.myPageItemsCount = response.data.count;
			$scope.myItemsTotalCount = response.data.total;
			$scope.eventsList = response.data.results;
		});
	}
	$scope.mySelectedItems = [];
	$scope.watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
})
.controller('seriesCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.seriesList = [];
	$scope.myPageItemsCount = 0;
	$scope.myItemsTotalCount = 0;
	marvelAPIservice.getSeries().success(function(response) {
		$scope.myPageItemsCount = response.data.count;
		$scope.myItemsTotalCount = response.data.total;
		$scope.seriesList = response.data.results;
	});
	$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getSeries(currentPage * pageItems, pageItems).success(function(response) {
			$scope.myPageItemsCount = response.data.count;
			$scope.myItemsTotalCount = response.data.total;
			$scope.seriesList = response.data.results;
		});
	}
	$scope.mySelectedItems = [];
	$scope.watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
})
.controller('storiesCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
	$scope.storiesList = [];
	$scope.myPageItemsCount = 0;
	$scope.myItemsTotalCount = 0;
	marvelAPIservice.getStories().success(function(response) {
		$scope.myPageItemsCount = response.data.count;
		$scope.myItemsTotalCount = response.data.total;
		$scope.storiesList = response.data.results;
	});
	$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getStories(currentPage * pageItems, pageItems).success(function(response) {
			$scope.myPageItemsCount = response.data.count;
			$scope.myItemsTotalCount = response.data.total;
			$scope.storiesList = response.data.results;
		});
	}
	$scope.mySelectedItems = [];
	$scope.watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
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
		nojquery: {
			Tablesaw: 0,
			angularjs_datatables: 0,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		responsive: {
			Tablesaw: 1,
			angularjs_datatables: 0,
			SmartTables: 0.8,
			trNgGrid: 0,
			adapt_strap: 0
		},
		inlineedit: {
			Tablesaw: 0,
			angularjs_datatables: 1,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		customcell: {
			Tablesaw: 1,
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 0
		},
		paging: {
			Tablesaw: 1,
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		rest: {
			Tablesaw: 1,
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		search: {
			Tablesaw: 0,
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		easy: {
			Tablesaw: 0.4,
			angularjs_datatables: 0.2,
			SmartTables: 0.5,
			trNgGrid: 1,
			adapt_strap: 0.5
		},
		features: {
			Tablesaw: 0.4,
			angularjs_datatables: 1,
			SmartTables: 0.8,
			trNgGrid: 0.8,
			adapt_strap: 0.6
		},
		maturity: {
			Tablesaw: 0.6,
			angularjs_datatables: 0.9,
			SmartTables: 0.9,
			trNgGrid: 0.8,
			adapt_strap: 0.4
		}
	  };
	var ob  = {};
	for(var rdos in $scope.evaledList){
		var ename =$scope.evaledList[rdos].name;
		var sum = 0;
		for (var vals in $scope.conclusionList) {
			sum = sum + $scope.conclusionList[vals][ename];
		}
		ob[ename] = Math.round(sum*10)/10;
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
	$scope.comicsList = [];
	$scope.myPageItemsCount = 0;
	$scope.myItemsTotalCount = 0;
	marvelAPIservice.getComics().success(function(response) {
		$scope.myPageItemsCount = response.data.count;
		$scope.myItemsTotalCount = response.data.total;
		$scope.comicsList = response.data.results;
	});
	$scope.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getComics(currentPage * pageItems, pageItems).success(function(response) {
			$scope.myPageItemsCount = response.data.count;
			$scope.myItemsTotalCount = response.data.total;
			$scope.comicsList = response.data.results;
		});
	}
	$scope.mySelectedItems = [];
	$scope.watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
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
