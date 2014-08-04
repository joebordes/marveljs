'use strict';

/* Services */

angular.module('MarvelFeederApp.services', [])
  .value('version', '0.1')
  .factory('marvelAPIservice',function($http, Setup, md5) {
		var marvelAPI = {};
		var marvelAPIGateWay = Setup.marvelapi;
		var marvelPublicKey = Setup.marvelPublicKey;
		var marvelPrivateKey = Setup.marvelPrivateKey;
		var marvelTS = 'OUR MARVEL PASS KEY';  // this can be any string
		var marvelHash = md5.createHash(marvelTS + marvelPrivateKey + marvelPublicKey);
		
		marvelAPI.getComics = function() {
			return $http({
				method : 'JSONP',
				url : marvelAPIGateWay + 'comics?apikey='
						+ marvelPublicKey + '&ts=' + marvelTS + '&hash='
						+ marvelHash + '&callback=JSON_CALLBACK'
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

		return marvelAPI;
	}
);
