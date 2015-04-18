/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.stories', [])
.controller('StoriesController',function($i18next, marvelAPIservice) {
	this.storiesList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	marvelAPIservice.getStories().success(function(response) {
		this.myPageItemsCount = response.data.count;
		this.myItemsTotalCount = response.data.total;
		this.storiesList = response.data.results;
	});
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getStories(currentPage * pageItems, pageItems).success(function(response) {
			this.myPageItemsCount = response.data.count;
			this.myItemsTotalCount = response.data.total;
			this.storiesList = response.data.results;
		});
	};
	this.mySelectedItems = [];
	this.$watch("mySelectedItems.length", function(newLength){
	  console.log(this.mySelectedItems);
	});
});

