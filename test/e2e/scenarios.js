'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('marveljs', function() {

  browser.get('index.html');

  it('should automatically redirect to /comics when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/comics");
  });


  describe('comics', function() {

    beforeEach(function() {
      browser.get('index.html#/comics');
    });


    it('should render comics when user navigates to /comics', function() {
      expect(element.all(by.tagName('h2')).first().getText()).
        toMatch(/Comic Listing/);
    });

    it('should render comics when user navigates to /comics', function() {
        expect(element.all(by.tagName('tr')).count()).toBe(21); // 20 limit comic rows plus header
    });
    
	// checking if the comics attributes match against the expected values
	it('should filter on SpiderMan comics', function () {
		element(by.model('nameFilter')).sendKeys('Spider');
		expect(element.all(by.tagName('tr')).count()).toBe(4); // 4 spidey comic rows plus header
	});

  });


  describe('comic', function() {

    beforeEach(function() {
      browser.get('index.html#/comics/48813');
    });


    it('should render comic when user navigates to /comic', function() {
      expect(element.all(by.tagName('a')).first().getAttribute('innerHTML')).
        toMatch(/&lt;- Back to comics list/);
    });

  });
});
