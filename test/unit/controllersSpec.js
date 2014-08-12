'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
	beforeEach(module('MarvelJSApp'));
  //beforeEach(module('MarvelJSApp.controllers'));
  //beforeEach(module('MarvelJSApp.services'));
  //beforeEach(module('MarvelJSApp.ngRoute'));


  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl1 = $controller('comicsController', { $scope: {} });
    expect(myCtrl1).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('comicController', { $scope: {} });
    expect(myCtrl2).toBeDefined();
  }));
});
