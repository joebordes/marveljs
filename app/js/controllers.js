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
	} ];
	$scope.isActive = function (viewLocation) {
		var active = (viewLocation === $location.path());
		return active;
	};
})
.controller('characterCtrl',function($scope, Setup, $i18next, $filter, marvelAPIservice) {
		$scope.gridOptions = {};
		$scope.mvData = [];
		$scope.gridOptions = {
			data: 'mvData',
			rowHeight: 100,
			columnDefs: [
			{ field:'thumbnail', displayName: i18n.t('Image'),
				cellTemplate: '<img src="{{row.getProperty(\'thumbnail\').path}}.{{row.getProperty(\'thumbnail\').extension }}" style="max-width:100px"/>',
				width:100, height:100 },
			{ field:'name', displayName: i18n.t('Character')},
			{ field:'description', displayName: i18n.t('Description') }
		]};
		marvelAPIservice.getCharacters().success(function(response) {
			$scope.mvData = response.data.results;
		});

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
