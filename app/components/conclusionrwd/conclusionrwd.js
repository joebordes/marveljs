/**
 * @author Joe Bordes
 */

angular.module('MarvelJSApp.conclusionrwd', [])
.controller('ConclusionrwdController',function($scope, $i18next) {
	$scope.evaledList = [
	  {
		name: 'Tablesaw',
		url: 'http://filamentgroup.com/lab/tablesaw.html'
	  },
	  {
		name: 'RWD',
		url: 'https://github.com/nadangergeo/RWD-Table-Patterns'
	  }
	];
	$scope.conclusionList = {
		ajsnative: {
			Tablesaw: 0.2,
			RWD: 0.5,
		},
		nojquery: {
			Tablesaw: 0,
			RWD: 1,
		},
		easy: {
			Tablesaw: 0.4,
			RWD: 0.2,
		},
		features: {
			Tablesaw: 0.4,
			RWD: 1,
		},
		maturity: {
			Tablesaw: 0.6,
			RWD: 0.9,
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

