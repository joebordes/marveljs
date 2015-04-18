/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.characters', [])
.controller('CharactersController',function($scope, $i18next, marvelAPIservice) {
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
	};
	$scope.mySelectedItems = [];
	$scope.$watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
});

