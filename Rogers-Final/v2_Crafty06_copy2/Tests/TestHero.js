/**
 * @author Kerri Rogers
 * 4 tests Full coverage
 */
/* jshint devel: true */

describe("TestHero", function() {'use strict';
		
	var hero = null;
	
	beforeEach(function() {
		module('heroMod');				
	});
	
	beforeEach(inject(function($injector) {
		hero = $injector.get('hero');
	}));
	
	it("can get hero", function()  {			
		expect(hero).toNotEqual(null);
	});
	
	it("can get name", function()  {			
		expect(hero.name).toEqual('Sam');
	});
	
	it("can get hitPoints", function()  {			
		expect(hero.hitPoints).toEqual(12);
	});
	
	it("can get damage", function()  {			
		expect(hero.damage).toEqual(2);
	});
	
});