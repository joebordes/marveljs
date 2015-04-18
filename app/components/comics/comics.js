/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.comics', [])
.controller('ComicsController',function(marvelAPIservice, $i18next) {
	this.comicsList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	var localthis = this;
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getComics(currentPage * pageItems, pageItems).success(function(response) {
			localthis.myPageItemsCount = response.data.count;
			localthis.myItemsTotalCount = response.data.total;
			localthis.comicsList = response.data.results;
		});
	};
	this.mySelectedItems = [];
});

