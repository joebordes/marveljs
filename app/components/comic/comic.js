/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.comic', [])
.controller('ComicController', function(marvelAPIservice) {
	this.id = $routeParams.id;
	this.events = [];
	this.creators = [];
	this.comic = null;
	
	marvelAPIservice.getComicDetails(this.id).success(function (response) {
		this.comic = response.data.results[0];
		this.creators = this.comic.creators.items;
	});
	//marvelAPIservice.getComicCreators(this.id).success(function (response) {
	//	this.creators = response.MRData.RaceTable.Races; 
	//});
	//marvelAPIservice.getComicEvents(this.id).success(function (response) {
	//	this.events = response.MRData.RaceTable.Races; 
	//});
});

