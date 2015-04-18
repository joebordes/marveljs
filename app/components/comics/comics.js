/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.comics', [])
.controller('ComicsController',function($scope, marvelAPIservice, $i18next) {
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
	};
	$scope.mySelectedItems = [];
	$scope.$watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
});

