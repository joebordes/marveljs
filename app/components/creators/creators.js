/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.creators', [])
.controller('CreatorsController',function($i18next, marvelAPIservice) {
	this.creatorList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	marvelAPIservice.getCreators().success(function(response) {
		this.myPageItemsCount = response.data.count;
		this.myItemsTotalCount = response.data.total;
		this.creatorList = response.data.results;
	});
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getCreators(currentPage * pageItems, pageItems).success(function(response) {
			this.myPageItemsCount = response.data.count;
			this.myItemsTotalCount = response.data.total;
			this.creatorList = response.data.results;
		});
	};
	this.mySelectedItems = [];
	this.$watch("mySelectedItems.length", function(newLength){
	  console.log(this.mySelectedItems);
	});
});

