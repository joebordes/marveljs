'use strict';

/* Directives */

angular.module('MarvelJSApp.directives', [])
.directive('appVersion',
[ 'version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
} ])
.directive('rwdtablepatterns', function(version) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			console.log(scope, element, attrs);
			angular.element(element).responsiveTable(scope.$eval(attrs.directiveName));
		}
	};
})
.directive('tablesaw', function(version) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			console.log(scope, element, attrs);
			$( document ).trigger( "enhance.tablesaw" );
		}
	};
})
;
