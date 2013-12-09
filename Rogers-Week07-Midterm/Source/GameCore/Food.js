/**
 * @author Charlie Calvert
 */

// food is a tile on the grid that the PC can visit to gain strength
Crafty.c('Food', {
    init: function() { 'use strict';
        this.requires('Actor, spr_food');
    },

    // Process a visitation with this food
    visit: function() { 'use strict';
        this.destroy();
        Crafty.audio.play('knock');
        // Crafty.trigger('FoodVisited', this);
    }
});
