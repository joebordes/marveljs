'use strict';

describe('comicsController', function (Setup, md5) {
	var marvelAPIGateWay = Setup.marvelapi;
	var marvelPublicKey = Setup.marvelPublicKey;
	var marvelPrivateKey = Setup.marvelPrivateKey;
	var marvelTS = 'OUR MARVEL PASS KEY';  // this can be any string
	var marvelHash = md5.createHash(marvelTS + marvelPrivateKey + marvelPublicKey);

	// First, we load the app's module
	beforeEach(module('MarvelJSApp'));

	// Then we create some variables we're going to use
	var comicsController, scope, httpMock;

	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		// Then we create an $httpBackend instance.
		httpMock = $httpBackend;

		// Here, we set the httpBackend standard reponse to the URL the controller is supposed to retrieve from the API
		httpMock.expectJSONP(
				marvelAPIGateWay + 'comics?apikey=' + marvelPublicKey + '&ts=' + marvelTS + '&hash=' + marvelHash + '&callback=JSON_CALLBACK')
		.respond(
			{"code":200,"status":"Ok","copyright":"© 2014 MARVEL","attributionText":"Data provided by Marvel. © 2014 MARVEL","attributionHTML":"<a href=\"http://marvel.com\">Data provided by Marvel. © 2014 MARVEL</a>","etag":"5bb24f1a84aec24d16e277027d98134f98a159d9","data":{"offset":0,"limit":20,"total":32647,"count":3,
			"results":[
				{"id":41530,"digitalId":0,"title":"Ant-Man: So (Trade Paperback)","issueNumber":0,"variantDescription":"","description":"It's the origin of the original Avenger, Ant-Man! Hank Pym has been known by a variety of names — including Ant-Man, Giant-Man, Goliath and Yellowjacket — he’s been an innovative scientist, a famed super hero, an abusive spouse and more. What demons drive a man like Hank Pym? And how did he begin his heroic career? ","modified":"2012-09-25T18:05:58-0400","isbn":"978-0-7851-6390-9","upc":"","diamondCode":"","ean":"9780785 163909 51999","issn":"","format":"Trade Paperback","pageCount":136,"textObjects":[{"type":"issue_solicit_text","language":"en-us","text":"It's the origin of the original Avenger, Ant-Man! Hank Pym has been known by a variety of names — including Ant-Man, Giant-Man, Goliath and Yellowjacket — he’s been an innovative scientist, a famed super hero, an abusive spouse and more. What demons drive a man like Hank Pym? And how did he begin his heroic career? "}],"resourceURI":"http://gateway.marvel.com/v1/public/comics/41530","urls":[{"type":"detail","url":"http://marvel.com/comics/collection/41530/ant-man_so_trade_paperback?utm_campaign=apiRef&utm_source=ba99d22dda91af1c4b3b7b41216fb469"},{"type":"purchase","url":"http://comicstore.marvel.com/Ant-Man-So-0/digital-comic/27157?utm_campaign=apiRef&utm_source=ba99d22dda91af1c4b3b7b41216fb469"}],"series":{"resourceURI":"http://gateway.marvel.com/v1/public/series/15481","name":"Ant-Man: So (2011 - Present)"},"variants":[],"collections":[],"collectedIssues":[],"dates":[{"type":"onsaleDate","date":"2020-12-31T00:00:00-0500"},{"type":"focDate","date":"2020-12-16T00:00:00-0500"}],"prices":[{"type":"printPrice","price":19.99}],"thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/c/30/4fe8cb51f32e0","extension":"jpg"},"images":[{"path":"http://i.annihil.us/u/prod/marvel/i/mg/c/30/4fe8cb51f32e0","extension":"jpg"}],"creators":{"available":1,"collectionURI":"http://gateway.marvel.com/v1/public/comics/41530/creators","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/creators/4430","name":"Jeff Youngquist","role":"editor"}],"returned":1},"characters":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/41530/characters","items":[],"returned":0},"stories":{"available":2,"collectionURI":"http://gateway.marvel.com/v1/public/comics/41530/stories","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/stories/93946","name":"Cover #93946","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/93947","name":"Interior #93947","type":"interiorStory"}],"returned":2},"events":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/41530/events","items":[],"returned":0}},
				{"id":50350,"digitalId":0,"title":"Amazing Spider-Man  (2014) #13","issueNumber":13,"variantDescription":"","description":"The Greatest Super Hero of All Time RETURNS!\nThe world may have changed since Spidey’s been gone, but so has Peter Parker. This is a man with a second chance at life, and he’s not wasting a moment of it. Same Parker Luck, new Parker attitude. Putting the “friendly” back in the neighborhood, the “hero” back into “super hero,” and the “amazing” back into “Spider-Man!” Also returning: The recharged and reenergized ELECTRO!\n","modified":"2014-04-21T15:46:45-0400","isbn":"","upc":"75960607901801311","diamondCode":"","ean":"","issn":"","format":"Comic","pageCount":32,"textObjects":[{"type":"issue_solicit_text","language":"en-us","text":"The Greatest Super Hero of All Time RETURNS!\nThe world may have changed since Spidey’s been gone, but so has Peter Parker. This is a man with a second chance at life, and he’s not wasting a moment of it. Same Parker Luck, new Parker attitude. Putting the “friendly” back in the neighborhood, the “hero” back into “super hero,” and the “amazing” back into “Spider-Man!” Also returning: The recharged and reenergized ELECTRO!\n"}],"resourceURI":"http://gateway.marvel.com/v1/public/comics/50350","urls":[{"type":"detail","url":"http://marvel.com/comics/issue/50350/amazing_spider-man_2014_13?utm_campaign=apiRef&utm_source=ba99d22dda91af1c4b3b7b41216fb469"}],"series":{"resourceURI":"http://gateway.marvel.com/v1/public/series/17285","name":"Amazing Spider-Man  (2014 - Present)"},"variants":[],"collections":[],"collectedIssues":[],"dates":[{"type":"onsaleDate","date":"2015-01-07T00:00:00-0500"},{"type":"focDate","date":"2014-12-24T00:00:00-0500"}],"prices":[{"type":"printPrice","price":3.99}],"thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available","extension":"jpg"},"images":[],"creators":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/50350/creators","items":[],"returned":0},"characters":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/50350/characters","items":[],"returned":0},"stories":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/50350/stories","items":[],"returned":0},"events":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/50350/events","items":[],"returned":0}},
				{"id":48813,"digitalId":0,"title":"Savage Wolverine (2013) #23","issueNumber":23,"variantDescription":"","description":"Wolverine versus the Wild West!","modified":"2014-06-25T13:25:12-0400","isbn":"","upc":"75960607917902311","diamondCode":"","ean":"","issn":"","format":"Comic","pageCount":32,"textObjects":[{"type":"issue_solicit_text","language":"en-us","text":"Wolverine versus the Wild West!"}],"resourceURI":"http://gateway.marvel.com/v1/public/comics/48813","urls":[{"type":"detail","url":"http://marvel.com/comics/issue/48813/savage_wolverine_2013_23?utm_campaign=apiRef&utm_source=ba99d22dda91af1c4b3b7b41216fb469"}],"series":{"resourceURI":"http://gateway.marvel.com/v1/public/series/17539","name":"Savage Wolverine (2013 - Present)"},"variants":[],"collections":[],"collectedIssues":[],"dates":[{"type":"onsaleDate","date":"2014-09-17T00:00:00-0400"},{"type":"focDate","date":"2014-09-03T00:00:00-0400"}],"prices":[{"type":"printPrice","price":3.99}],"thumbnail":{"path":"http://i.annihil.us/u/prod/marvel/i/mg/6/60/53ab06357dd76","extension":"jpg"},"images":[{"path":"http://i.annihil.us/u/prod/marvel/i/mg/6/60/53ab06357dd76","extension":"jpg"}],"creators":{"available":3,"collectionURI":"http://gateway.marvel.com/v1/public/comics/48813/creators","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/creators/12398","name":"Jonathan Marks","role":"artist"},{"resourceURI":"http://gateway.marvel.com/v1/public/creators/5128","name":"David Morrell","role":"writer"},{"resourceURI":"http://gateway.marvel.com/v1/public/creators/8715","name":"Jeanine Schaefer","role":"editor"}],"returned":3},"characters":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/48813/characters","items":[],"returned":0},"stories":{"available":2,"collectionURI":"http://gateway.marvel.com/v1/public/comics/48813/stories","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/stories/109717","name":"cover from Savage Wolverine (2013) #23","type":"cover"},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/109718","name":"story from Savage Wolverine (2013) #23","type":"interiorStory"}],"returned":2},"events":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/48813/events","items":[],"returned":0}},
			]}}
		);
		// Here, we create a mock scope variable, to replace the actual $scope variable the controller would take as parameter
		scope = $rootScope.$new();

		// Here, we actually initialize our controller, passing our new mock scope as parameter
		comicsController = $controller('comicsController', {
		$scope: scope
		});

		// Then we flush the httpBackend to resolve the fake http call
		httpMock.flush();

	}));

	// check if the comicsList is actually retrieving the mock comic array
	it('should return a list with three comics', function () {
		expect(scope.comicsList.length).toEqual(20);
	});
/*
	// checking if the comics attributes match against the expected values
	it('should retrieve the titles of the comics', function () {
		expect(scope.comicsList[0].title).toBe("Ant-Man: So (Trade Paperback)");
		expect(scope.comicsList[1].title).toBe("Amazing Spider-Man  (2014) #13");
		expect(scope.comicsList[2].title).toBe("Savage Wolverine (2013) #23");
	});
*/
	});