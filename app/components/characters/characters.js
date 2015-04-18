/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.characters', [])
.controller('CharactersController',function($i18next, marvelAPIservice) {
	this.characterList = [];
	this.myPageItemsCount = 0;
	this.myItemsTotalCount = 0;
	marvelAPIservice.getCharacters().success(function(response) {
		this.myPageItemsCount = response.data.count;
		this.myItemsTotalCount = response.data.total;
		this.characterList = response.data.results;
	});
	this.onServerSideItemsRequested = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		marvelAPIservice.getCharacters(currentPage * pageItems, pageItems).success(function(response) {
			this.myPageItemsCount = response.data.count;
			this.myItemsTotalCount = response.data.total;
			this.characterList = response.data.results;
		});
	};
	this.mySelectedItems = [];
	this.$watch("mySelectedItems.length", function(newLength){
	  console.log(this.mySelectedItems);
	});
});

