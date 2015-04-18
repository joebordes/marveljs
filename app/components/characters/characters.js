/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.characters', [])
.controller('CharactersController',function($i18next, marvelAPIservice) {
	this.characterList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	var localthis = this;
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getCharacters(currentPage * pageItems, pageItems).success(function(response) {
			localthis.myPageItemsCount = response.data.count;
			localthis.myItemsTotalCount = response.data.total;
			localthis.characterList = response.data.results;
		});
	};
	this.mySelectedItems = [];
});

