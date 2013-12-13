/**
 * @author Kerri Rogers
 * 29 Tests Full coverage
 */
/* jshint devel: true */

describe("TestRaces", function() {'use strict';
		
	var races = null;
	
	beforeEach(function() {
		module('racesMod');				
	});
	
	beforeEach(inject(function($injector) {
		races = $injector.get('races');
	}));
	
	it("can get a race", function()  {			
		expect(races).toNotEqual(null);
	});
	
	it("can get a dwarf", function()  {			
		expect(races[0].name).toEqual('Dwarves');
	});
		
	it("can get dwarf hit die", function()  {			
		expect(races[0].hitDie).toEqual(1);
	});
	
	it("can get dwarf hit die", function()  {			
		expect(races[0].description).toEqual('Typically about 4 feet tall, stocky, lifespan of 300-400 years. Thick hair and beards');
	});
	
	it("can get dwarf language", function()  {			
		expect(races[0].languages[0]).toEqual('Common');
	});
	
	it("can get dwarf language", function()  {			
		expect(races[0].languages[1]).toEqual('Dwarvish');
	});
	
	it("can get Dwarf classes", function()  {			
		expect(races[0].classes[0]).toEqual('Cleric');
	});
	
	it("can get Dwarf classes", function()  {			
		expect(races[0].classes[1]).toEqual('Fighter');
	});
	
	it("can get Dwarf classes", function()  {			
		expect(races[0].classes[2]).toEqual('Thief');
	});
	
	it("can get halflings", function()  {			
		expect(races[1].name).toEqual('Halflings');
	});
	
	it("can get halflings", function()  {			
		expect(races[1].hitDie).toEqual(6);
	});
	
	it("can get halflings", function()  {			
		expect(races[1].description).toEqual('Typically 3 tall, 60 lbs., with curly hair, no facial hair, lifespan of about 100 years.');
	}); 
	
	it("can get halfling language", function()  {			
		expect(races[1].languages[0]).toEqual('Common');
	});
	
	it("can get halfling language", function()  {			
		expect(races[1].languages[1]).toEqual('Halfling');
	});
	
	it("can get Halfling classes", function()  {			
		expect(races[1].classes[0]).toEqual('Cleric');
	});
	
	it("can get Halfling classes", function()  {			
		expect(races[1].classes[1]).toEqual('Fighter');
	});
	
	it("can get Halfling classes", function()  {			
		expect(races[1].classes[2]).toEqual('Thief');
	});
	
	it("can get Elves", function()  {			
		expect(races[2].name).toEqual('Elves');
	}); 

	it("can get elf hit die", function()  {			
		expect(races[2].hitDie).toEqual(6);
	});

	it("can get elf description", function()  {			
		expect(races[2].description).toEqual('Typically about 5 feet tall, slender, 130 lbs. Lifespan of 1200 years or more. Pale with dark hair, pointed ears, little or no facial hair.');
	});
	
	it("can get Elf language", function()  {			
		expect(races[2].languages[0]).toEqual('Common');
	});
	
	it("can get Elf language", function()  {			
		expect(races[2].languages[1]).toEqual('Elvish');
	});
	
	it("can get Elf classes", function()  {			
		expect(races[2].classes[0]).toEqual('Fighter');
	});
	
	it("can get Elf classes", function()  {			
		expect(races[2].classes[1]).toEqual('Magic User');
	});

	it("can get Humans", function()  {			
		expect(races[3].name).toEqual('Humans');
	});

	it("can get Human hit die", function()  {			
		expect(races[3].hitDie).toEqual(1);
	});

	it("can get Human description", function()  {			
		expect(races[3].description).toEqual('Average male is typically 6 feet tall, 175 lbs., and lives about 75 years.');
	});

	it("can get Human language", function()  {			
		expect(races[3].languages[0]).toEqual('Common');
	});

	it("can get Human classes", function()  {			
		expect(races[3].classes[0]).toEqual('Any');
	});
	
}); 