/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.events', [])
.controller('EventsController',function($i18next, marvelAPIservice) {
	this.eventsList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	var localthis = this;
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getEvents(currentPage * pageItems, pageItems).success(function(response) {
			localthis.myPageItemsCount = response.data.count;
			localthis.myItemsTotalCount = response.data.total;
			localthis.eventsList = response.data.results;
		});
	};
	this.mySelectedItems = [];
});

