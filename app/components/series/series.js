/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.series', [])
.controller('SeriesController',function($i18next, marvelAPIservice) {
	this.seriesList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	marvelAPIservice.getSeries().success(function(response) {
		this.myPageItemsCount = response.data.count;
		this.myItemsTotalCount = response.data.total;
		this.seriesList = response.data.results;
	});
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getSeries(currentPage * pageItems, pageItems).success(function(response) {
			this.myPageItemsCount = response.data.count;
			this.myItemsTotalCount = response.data.total;
			this.seriesList = response.data.results;
		});
	};
	this.mySelectedItems = [];
	this.$watch("mySelectedItems.length", function(newLength){
	  console.log(this.mySelectedItems);
	});
});

