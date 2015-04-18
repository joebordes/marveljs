/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.series', [])
.controller('SeriesController',function($i18next, marvelAPIservice) {
	this.seriesList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	var localthis = this;
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getSeries(currentPage * pageItems, pageItems).success(function(response) {
			localthis.myPageItemsCount = response.data.count;
			localthis.myItemsTotalCount = response.data.total;
			localthis.seriesList = response.data.results;
		});
	};
	this.mySelectedItems = [];
});

