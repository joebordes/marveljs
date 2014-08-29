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
		
		marvelAPI.getComics = function(offset,limit) {
			var URL = marvelAPIGateWay + 'comics?apikey='
			+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
			+ marvelHash + '&callback=JSON_CALLBACK';
			if (offset) URL = URL + '&offset=' + offset
			if (limit) URL = URL + '&limit=' + limit
			return $http({
				method : 'JSONP',
				url : URL
			});
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
		marvelAPI.getCharacters = function() {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'characters?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getCreators = function() {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'creators?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getEvents = function() {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'events?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getSeries = function() {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'series?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}
		marvelAPI.getStories = function() {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'stories?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
			});
		}

		return marvelAPI;
	}
);
