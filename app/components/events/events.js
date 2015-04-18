/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.events', [])
.controller('EventsController',function($i18next, marvelAPIservice) {
	this.eventsList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	marvelAPIservice.getEvents().success(function(response) {
		this.myPageItemsCount = response.data.count;
		this.myItemsTotalCount = response.data.total;
		this.eventsList = response.data.results;
	});
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getEvents(currentPage * pageItems, pageItems).success(function(response) {
			this.myPageItemsCount = response.data.count;
			this.myItemsTotalCount = response.data.total;
			this.eventsList = response.data.results;
		});
	};
	this.mySelectedItems = [];
	this.$watch("mySelectedItems.length", function(newLength){
	  console.log(this.mySelectedItems);
	});
});

