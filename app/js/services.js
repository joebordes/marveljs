'use strict';

/* Services */

angular.module('MarvelJSApp.services', [])
  .value('version', '0.1')
  .factory('marvelAPIservice',function($http, Setup, md5) {
		var marvelAPI = {};
		var marvelAPIGateWay = Setup.marvelapi;
		var marvelPublicKey = Setup.marvelPublicKey;
		var marvelPrivateKey = Setup.marvelPrivateKey;
		var marvelTS = 'OUR MARVEL PASS KEY';  // this can be any string
		var marvelHash = md5.createHash(marvelTS + marvelPrivateKey + marvelPublicKey);
		
		marvelAPI.getMarvelInfo = function(info,offset,limit) {
			var URL = marvelAPIGateWay + info + '?apikey='
			+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
			+ marvelHash + '&callback=JSON_CALLBACK';
			if (offset) URL = URL + '&offset=' + offset
			if (limit) URL = URL + '&limit=' + limit
			return $http({
				method : 'JSONP',
				url : URL
			});
		}
		marvelAPI.getComics = function(offset,limit) {
			return marvelAPI.getMarvelInfo('comics',offset,limit);
		}
		marvelAPI.getComicDetails = function(comicid) {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'comics/'+comicid+'?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getComicCreators = function(comicid) {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'comics/'+comicid+'/creators?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getComicEvents = function(comicid) {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'comics/'+comicid+'/events?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getCharacters = function(offset,limit) {
			return marvelAPI.getMarvelInfo('characters',offset,limit);
		}
		marvelAPI.getCreators = function(offset,limit) {
			return marvelAPI.getMarvelInfo('creators',offset,limit);
		}
		marvelAPI.getEvents = function(offset,limit) {
			return marvelAPI.getMarvelInfo('events',offset,limit);
		}
		marvelAPI.getSeries = function(offset,limit) {
			return marvelAPI.getMarvelInfo('series',offset,limit);
		}
		marvelAPI.getStories = function(offset,limit) {
			return marvelAPI.getMarvelInfo('stories',offset,limit);
		}

		return marvelAPI;
	}
);
