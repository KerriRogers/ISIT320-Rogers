/**
 * @author Kerri Rogers
  */
/* jshint devel: true */
/* global angular:true */

angular.module('characterMod', ['elfGameMod', 'heroMod', 'classesMod', 'racesMod'])
.factory('people', function() {'use strict';

	return {
		tower : function() {
			return {
		
				hitPoints : 4,
				damage : 1,
				bonusDamage : function() {
					return Math.floor(Math.random() * 2) + 1;
				},
				bonusHitPoints : function() {
					return Math.floor(Math.random() * 4) + 1;
				}
			};
		}
	};
});
