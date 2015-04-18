/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.creators', [])
.controller('CreatorsController',function($scope, $i18next, marvelAPIservice) {
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
	};
	$scope.mySelectedItems = [];
	$scope.$watch("mySelectedItems.length", function(newLength){
	  console.log($scope.mySelectedItems);
	});
});

