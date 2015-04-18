/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.config', [])
.controller('ConfigController',function($i18next, $filter, marvelAPIservice, marvelAPIInvalidKeys) {
	this.langs = [ {
		name : i18n.t('English'),
		code : 'en'
	}, {
		name : i18n.t('Spanish'),
		code : 'es'
	}];
	this.changeLanguage = function (lng) {
		$i18next.options.lng=lng.code;
	};
	var found = $filter('getById')(this.langs, $i18next.options.lng, 'code');
	if (found!=null) {
		this.currentLang = found;
	} else {
		this.currentLang = this.langs[0];
	}
	this.mvpublickey = marvelAPIservice.getPublicKey();
	this.mvprivatekey = marvelAPIservice.getPrivateKey();
	this.changemvprivatekey = function() {
		marvelAPIservice.setPrivateKey(this.mvprivatekey);
		marvelAPIservice.setConfigured();
	};
	this.changemvpublickey = function() {
		marvelAPIservice.setPublicKey(newval);
		marvelAPIservice.setConfigured();
	};
	this.MarvelAPIConfigured = marvelAPIservice.isConfigured();
	this.MarvelAPIKeys = marvelAPIInvalidKeys.hasInvalidKeys();
});

