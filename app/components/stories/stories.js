/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.stories', [])
.controller('StoriesController',function($scope, $i18next, marvelAPIservice) {
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
	};
	$scope.mySelectedItems = [];
	$scope.$watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
});

