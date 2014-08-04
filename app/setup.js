angular.module('marveljs.setup', [])
.constant('Setup', {
	debug:			true,
	
	marvelapi:			'http://gateway.marvel.com/v1/public/',
	marvelPublicKey:	'put your marvel developer PUBLIC key here',
	marvelPrivateKey:	'put your marvel developer PRIVATE key here',  //**** DO NOT SHARE THIS WITH ANYONE!!! ***
	
	// default theme
	themeId: 		'simple',
	
	// default lanugage
	language: 		'en',
	
	// app branding
	app:			'MarvelJS',
	version:		'1.0',
	copy: 			'Made by Joe Bordes, JPL TSolucio, S.L.'
	
});