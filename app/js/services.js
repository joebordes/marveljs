'use strict';

/* Services */

angular.module('MarvelFeederApp.services', [])
  .value('version', '0.1')
  .factory('marvelAPIservice',function($http) {
		var marvelAPI = {};
		var marvelPublicKey = "ba99d22dda91af1c4b3b7b41216fb469";
		var marvelTS = "1406976137";
		var marvelHash = "09703b7a59ab046d1711828ef300eb28";
		
		marvelAPI.getComics = function() {
			return $http({
				method : 'JSONP',
				url : 'http://gateway.marvel.com/v1/public/comics?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getComicDetails = function(comicid) {
			return $http({
				method : 'JSONP',
				url : 'http://gateway.marvel.com/v1/public/comics/'+comicid+'?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getComicCreators = function(comicid) {
			return $http({
				method : 'JSONP',
				url : 'http://gateway.marvel.com/v1/public/comics/'+comicid+'/creators?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getComicEvents = function(comicid) {
			return $http({
				method : 'JSONP',
				url : 'http://gateway.marvel.com/v1/public/comics/'+comicid+'/events?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}

		return marvelAPI;
	}
);
