/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.config', [])
.controller('ConfigController',function($scope, $i18next, $filter, marvelAPIservice, marvelAPIInvalidKeys) {
	$scope.langs = [ {
		name : i18n.t('English'),
		code : 'en'
	}, {
		name : i18n.t('Spanish'),
		code : 'es'
	}];
	$scope.changeLanguage = function (lng) {
		$i18next.options.lng=lng.code;
	};
	var found = $filter('getById')($scope.langs, $i18next.options.lng, 'code');
	if (found!=null) {
		$scope.currentLang = found;
	} else {
		$scope.currentLang = $scope.langs[0];
	}
	$scope.mvpublickey = marvelAPIservice.getPublicKey();
	$scope.mvprivatekey = marvelAPIservice.getPrivateKey();
	$scope.$watch("mvpublickey", function(newval, oldval){
		marvelAPIservice.setPublicKey(newval);
		marvelAPIservice.setConfigured();
	});
	$scope.$watch("mvprivatekey", function(newval, oldval){
		marvelAPIservice.setPrivateKey(newval);
		marvelAPIservice.setConfigured();
	});
	$scope.MarvelAPIConfigured = marvelAPIservice.isConfigured();
	$scope.MarvelAPIKeys = marvelAPIInvalidKeys.hasInvalidKeys();
});

