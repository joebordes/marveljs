/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.comic', [])
.controller('ComicController', function($scope, marvelAPIservice) {
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

