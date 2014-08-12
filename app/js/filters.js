'use strict';

/* Filters */

angular.module('MarvelJSApp.filters', [])
.filter('getById', function() {
	return function(input, idvalue, idprop) {
		if (idprop===undefined) idprop='id';
		var i = 0, len = input.length;
		for (; i < len; i++) {
			if (input[i][idprop] == idvalue) {
				return input[i];
			}
		}
		return null;
	}
})
.filter('interpolate', [ 'version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	};
} ]);
