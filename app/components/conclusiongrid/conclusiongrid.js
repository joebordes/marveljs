/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.conclusiongrid', [])
.controller('ConclusionController',function($scope, $i18next) {
	$scope.evaledList = [
	  {
		name: 'angularjs_datatables',
		url: 'http://l-lin.github.io/angular-datatables/#/welcome'
	  },
	  {
		name: 'SmartTables',
		url: 'https://github.com/lorenzofox3/Smart-Table'
	  },
	  {
		name: 'trNgGrid',
		url: 'http://moonstorm.github.io/trNgGrid/release/'
	  },
	  {
		name: 'adapt_strap',
		url: 'http://adaptv.github.io/adapt-strap/',
	  }
	];
	$scope.conclusionList = {
		ajsnative: {
			angularjs_datatables: 0.5,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		nojquery: {
			angularjs_datatables: 0,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		responsive: {
			angularjs_datatables: 0,
			SmartTables: 0.8,
			trNgGrid: 0,
			adapt_strap: 0
		},
		inlineedit: {
			angularjs_datatables: 1,
			SmartTables: 0,
			trNgGrid: 0,
			adapt_strap: 0
		},
		customcell: {
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 0
		},
		paging: {
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		rest: {
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		search: {
			angularjs_datatables: 1,
			SmartTables: 1,
			trNgGrid: 1,
			adapt_strap: 1
		},
		easy: {
			angularjs_datatables: 0.2,
			SmartTables: 0.5,
			trNgGrid: 1,
			adapt_strap: 0.5
		},
		features: {
			angularjs_datatables: 1,
			SmartTables: 0.8,
			trNgGrid: 0.8,
			adapt_strap: 0.6
		},
		maturity: {
			angularjs_datatables: 0.9,
			SmartTables: 0.9,
			trNgGrid: 0.8,
			adapt_strap: 0.4
		}
	  };
	var ob  = {};
	for(var rdos in $scope.evaledList){
		var ename =$scope.evaledList[rdos].name;
		var sum = 0;
		for (var vals in $scope.conclusionList) {
			sum = sum + $scope.conclusionList[vals][ename];
		}
		ob[ename] = Math.round(sum*10)/10;
	}
	$scope.resultSum = ob;
});

