/**
 * Kerri Rogers
 */
/* jshint devel: true */

// This is the player-controlled character
Crafty.c('PlayerCharacter', { 
    init: function() { 'use strict';
        this.requires('Actor, Fourway, Collision, spr_mainCharacter, SpriteAnimation')
            .fourway(4)
            .stopOnSolids()
            .onHit('Village', this.visitVillage)
            .onHit('Food', this.visitFood)
            // These lines define our four animations
            //  ea call to .animate specifies:
            //  - the name of the animation
            //  - the x and y coordinates within the sprite
            //  - map at which the animation set begins
            //  - the number of animation frames *in addition to* the first one
            .animate('PlayerMovingUp',    0, 0, 4)
            .animate('PlayerMovingRight', 0, 0, 4)
            // .animate('PlayerMovingRight', [[0,0], [1,0], [2,0], [3, 0], [4,0], [5, 0]])
            .animate('PlayerMovingDown',  0, 0, 4)
            .animate('PlayerMovingLeft',  0, 1, 4);

        // Watch for a change of direction and switch animations accordingly
        var animation_speed = 8;
        this.bind('NewDirection', function(data) {
            this.encounterMode = false;
            if (data.x > 0) {
                Crafty.game.changeDirectionMessage("Sasha is moving right");
                this.playAnimation('PlayerMovingRight', animation_speed, -1);
            } else if (data.x < 0) {
                Crafty.game.changeDirectionMessage("Sasha is moving left");
                this.playAnimation('PlayerMovingLeft', animation_speed, -1);
            } else if (data.y > 0) {
                Crafty.game.changeDirectionMessage("Sasha is moving down");
                this.playAnimation('PlayerMovingDown', animation_speed, -1);
            } else if (data.y < 0) {
                Crafty.game.changeDirectionMessage("Sasha is moving up");
                this.playAnimation('PlayerMovingUp', animation_speed, -1);
            } else {
                this.resetAnimation();
            }
        });
        
        this.bind('goLeft', function() {
            // this.trigger('NewDirection', {x: 1, y: 0});
            this._movement.x = this._movement.x - 0.2;
            // this.x = this.x - 2;
            // this.animate('PlayerMovingRight', animation_speed, -1);
        });
        
        this.bind('stopMove', function() {
            this.stopMovement();
        });
    },

    // Registers a stop-movement function to be called when
    //  this entity hits an entity with the "Solid" component
    stopOnSolids: function() { 'use strict';
        this.onHit('Solid', this.stopMovement);
        return this;
    },

    stop: function() {
       
    },
    
    // Stops the movement
    stopMovement: function() { 'use strict';
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },
  
    // Respond to this player visiting a village
    visitVillage: function(data) { 'use strict';
        this.stopMovement();
        
        // While in an encounter, do nothing until the user moves again
        if (this.encounterMode) {
            return;
        }   
    
        Crafty.game.reportEvent("Sasha found a Grave!: " + data[0].obj._entityName);
        if (Crafty.game.encounter(data[0].obj)) {
           var villlage = data[0].obj;
           villlage.visit();
        } else {
            this.encounterMode = true;
        }
    },
    
//    Crafty.game.reportEvent("Sasha found blood!: " + data[0].obj._entityName);
    visitFood: function(data) { 'use strict';
        if (Crafty.game.encounterFood(data[0].obj)) {
           var food = data[0].obj;
           food.visit();
        }
    }
});
