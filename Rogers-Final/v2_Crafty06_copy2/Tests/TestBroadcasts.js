/**
 * Kerri Rogers
 */
/* jshint devel: true */

describe("Test Broadcasts: gameEventService", function() {'use strict';
	var elfController = null;
	var gameEventService = null;

	beforeEach(function() {
		module('elfPlayer');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		elfController = $rootScope.$new();
		$controller('ElfController', {
			$scope : elfController
		});
		gameEventService = $injector.get('gameEventService');

	}));

	it("Change Direction Broadcast", function() {
		var testValue = "Test Change Direction Broadcast";
		gameEventService.changeDirectionBroadcast(testValue);
		var actual = elfController.moveMessages;
		expect(actual).toEqual([testValue]);
	});

	it("Test Two Direction Broadcasts", function() {
		var testValue01 = 'Test';
		var testValue02 = 'Direction';
		gameEventService.changeDirectionBroadcast(testValue01);
		gameEventService.changeDirectionBroadcast(testValue02);
		var actual = elfController.moveMessages;
		expect(actual).toEqual([testValue02, testValue01]);
	});

	it("Change Tower Broadcast", function() {
		gameEventService.towerBroadcast("Palace");
		var actual = elfController.eventNote;
		expect(actual).toEqual('Palace');
	});

	it("Tests a Debug Broadcast", function() {
		gameEventService.debugBroadcast("Purple");
		var actual = elfController.debugMessages;
		expect(actual).toEqual(['Purple']);
	});

	it("Two Debug Broadcast", function() {
		gameEventService.debugBroadcast("Tart");
		gameEventService.debugBroadcast("Flame");
		var actual = elfController.debugMessages;
		expect(actual).toEqual(['Flame', 'Tart']);
	});

	it("Tests Encounter Broadcast", function() {
		gameEventService.encounterBroadcast("AlienEncounter");
		var actual = elfController.encounterMessage;
		expect(actual).toEqual('AlienEncounter');
	});

});
