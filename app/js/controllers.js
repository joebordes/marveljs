'use strict';

/* Controllers */

angular.module('MarvelJSApp.controllers', [])
.controller('navtopCtrl',function($scope, Setup, $i18next) {
	$scope.appname = Setup.app;
	$scope.messageurl = "http://marvel.com";
	$scope.messagetxt = "Data provided by Marvel. &copy; 2014 MARVEL";
})
.controller('navsideCtrl',function($scope, Setup, $i18next, $location) {
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
.controller('characterCtrl',function($scope, Setup, $i18next, $filter) {
	 $scope.myData = [
	                  {
	                      "firstName": "Cox",
	                      "lastName": "Carney",
	                      "company": "Enormo",
	                      "employed": true
	                  },
	                  {
	                      "firstName": "Lorraine",
	                      "lastName": "Wise",
	                      "company": "Comveyer",
	                      "employed": false
	                  },
	                  {
	                      "firstName": "Nancy",
	                      "lastName": "Waters",
	                      "company": "Fuelton",
	                      "employed": false
	                  }
	              ];
	 $scope.mvprivatekey = Setup.marvelPrivateKey;
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

	$scope.gridOptions = {};
	$scope.gridOptions.columnDefs = [
	                                 { name:'id', width:0 },
	                                 { name:'image', width:100 },
	                                 { name:'title', width:150 },
	                                 { name:'series.name', width:150  },
	                                 { name:'description', width:200  }
	                               ];

	marvelAPIservice.getComics().success(function(response) {
		// Dig into the responde to get the relevant data
		$scope.comicsList = response.data.results;
	      $scope.gridOptions.data = response.data.results;
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
