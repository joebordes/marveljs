/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.stories', [])
.controller('StoriesController',function($i18next, marvelAPIservice) {
	this.storiesList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	var localthis = this;
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getStories(currentPage * pageItems, pageItems).success(function(response) {
			localthis.myPageItemsCount = response.data.count;
			localthis.myItemsTotalCount = response.data.total;
			localthis.storiesList = response.data.results;
		});
	};
	this.mySelectedItems = [];
});

