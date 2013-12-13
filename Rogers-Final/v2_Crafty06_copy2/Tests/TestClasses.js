/**
 * @author Kerri Rogers
 *  47 Tests Full coverage
 */
/* jshint devel: true */
describe("TestClasses", function() {'use strict';
		
	var classes = null;
	
	beforeEach(function() {
		module('classesMod');
	});
	
	beforeEach(inject(function($injector) {
		classes = $injector.get('classes');
	}));

	it("can get a character", function()  {
		expect(classes).toNotEqual(null);
	});
	
// Cleric
	it("can get a Cleric", function()  {
		expect(classes.classes[0].name).toEqual('Cleric');
	}); 
	
	it("can get a armor", function()  {
		expect(classes.classes[0].armor).toEqual('any');
	}); 
	
	it("can get a hitDie", function()  {
		expect(classes.classes[0].hitDie).toEqual(6);
	}); 
	
	it("can get a shield", function()  {
		expect(classes.classes[0].shield).toEqual(true);
	}); 
	
	it("can get spells", function()  {
		expect(classes.classes[0].spells[0]).toEqual('none');
	}); 

	it("can get weapons", function()  {
		expect(classes.classes[0].weapons[0]).toEqual('club');
	}); 
		
	it("can get weapons", function()  {
		expect(classes.classes[0].weapons[1]).toEqual('mace');
	}); 
		
	it("can get weapons", function()  {
		expect(classes.classes[0].weapons[2]).toEqual('maul');
	}); 
	
	it("can get weapons", function()  {
		expect(classes.classes[0].weapons[3]).toEqual('quarterstaff');
	}); 
	
	it("can get weapons", function()  {
		expect(classes.classes[0].weapons[4]).toEqual('sling');
	}); 
	
	it("can get weapons", function()  {
		expect(classes.classes[0].weapons[5]).toEqual('warhammer');
	}); 
		
	it("can get xpForLevelTwo", function()  {
		expect(classes.classes[0].xpForLevelTwo).toEqual(1500);
	}); 
	
// fighter
	
	it("can get a fighter", function()  {
		expect(classes.classes[1].name).toEqual('Fighter');
	});
	
	it("can get a armor", function()  {
		expect(classes.classes[1].armor).toEqual('any');
	}); 
	
	it("can get a hitDie", function()  {
		expect(classes.classes[1].hitDie).toEqual(8);
	}); 
	
	it("can get a shield", function()  {
		expect(classes.classes[1].shield).toEqual(true);
	}); 
	
	it("can get spells", function()  {
		expect(classes.classes[1].spells[0]).toEqual('none');
	}); 
	
	it("can get weapons", function()  {			
		expect(classes.classes[1].weapons[0]).toEqual('Any');
	}); 
		
	it("can get xpForLevelTwo", function()  {			
		expect(classes.classes[1].xpForLevelTwo).toEqual(2000);
	}); 

// Magic user

	it("can get a Magic User", function()  {			
		expect(classes.classes[2].name).toEqual('Magic-User');
	});
	
	it("can get a armor", function()  {			
		expect(classes.classes[2].armor).toEqual('none');
	}); 
	
	it("can get a hitDie", function()  {			
		expect(classes.classes[2].hitDie).toEqual(4);
	}); 
	
	it("can get a shield", function()  {			
		expect(classes.classes[2].shield).toEqual(false);
	}); 

	it("can get spells", function()  {			
		expect(classes.classes[2].spells[0]).toEqual('Charm Person');
	}); 
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[1]).toEqual('Detect Magic');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[2]).toEqual('Floating Disc');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[3]).toEqual('Hold Portal');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[4]).toEqual('Light');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[5]).toEqual('Magic Missile');
	});

	it("can get spells", function()  {			
		expect(classes.classes[2].spells[6]).toEqual('Magic Mouth');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[7]).toEqual('Protection from Evil');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[8]).toEqual('Read Languages');
	});
	
	it("can get spells", function()  {			
		expect(classes.classes[2].spells[9]).toEqual('Read Magic');
	});
	
	it("can get spells", function()  {
		expect(classes.classes[2].spells[10]).toEqual('Shield');
	});
	
	it("can get spells", function()  {
		expect(classes.classes[2].spells[11]).toEqual('Sleep');
	});
	
	it("can get spells", function()  {
		expect(classes.classes[2].spells[12]).toEqual('Ventriloquism');
	});
		
	it("can get weapons", function()  {
		expect(classes.classes[2].weapons[0]).toEqual('cudgel');
	}); 

	it("can get weapons", function()  {
		expect(classes.classes[2].weapons[1]).toEqual('dagger');
	}); 

	it("can get weapons", function()  {
		expect(classes.classes[2].weapons[2]).toEqual('walking staff');
	}); 

// Thief
	it("can get a Thief", function()  {
		expect(classes.classes[3].name).toEqual('Thief');
	});

	it("can get a armor", function()  {
		expect(classes.classes[3].armor).toEqual('leather');
	}); 

	it("can get a hitDie", function()  {
		expect(classes.classes[3].hitDie).toEqual(4);
	}); 

	it("can get a shield", function()  {
		expect(classes.classes[3].shield).toEqual(false);
	}); 

	it("can get spells", function()  {
		expect(classes.classes[3].spells[0]).toEqual('none');
	}); 

	it("can get weapons", function()  {
		expect(classes.classes[3].weapons[0]).toEqual('any');
	}); 

	it("can get xpForLevelTwo", function()  { 'use strict';
		expect(classes.classes[3].xpForLevelTwo).toEqual(1250);
	}); 

});
