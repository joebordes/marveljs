/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.comics', [])
.controller('ComicsController',function(marvelAPIservice, $i18next) {
	this.comicsList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	marvelAPIservice.getComics().success(function(response) {
		this.myPageItemsCount = response.data.count;
		this.myItemsTotalCount = response.data.total;
		this.comicsList = response.data.results;
	});
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getComics(currentPage * pageItems, pageItems).success(function(response) {
			this.myPageItemsCount = response.data.count;
			this.myItemsTotalCount = response.data.total;
			this.comicsList = response.data.results;
		});
	};
	this.mySelectedItems = [];
});

