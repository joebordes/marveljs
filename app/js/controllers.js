'use strict';

/* Controllers */

angular.module('MarvelFeederApp.controllers', [])
	.controller('comicsController',function($scope, marvelAPIservice, Setup, md5, $i18next) {
		$scope.nameFilter = null;
		$scope.comicsList = [];
		$scope.searchFilter = function(comic) {
			var keyword = new RegExp($scope.nameFilter, 'i');
			return !$scope.nameFilter || keyword.test(comic.title)
					|| keyword.test(comic.series.name);
		};
		$scope.changeLanguage = function (lng) {
			$i18next.options.lng=lng;
		}

		marvelAPIservice.getComics().success(function(response) {
			// Dig into the responde to get the relevant data
			$scope.comicsList = response.data.results;
		});
	})
	.controller('comicController', function($scope, $routeParams, marvelAPIservice, Setup, md5) {
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
