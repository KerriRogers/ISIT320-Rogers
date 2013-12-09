angular.module('diceApp', [])
.controller('diceController', function($scope) {
    $scope.hintD6 = "You have 1 dice";
    $scope.totalD6 = 0;
    $scope.rollD6 = function () {
                $scope.totalD6 = rollDie(6);
    };
    
    $scope.hint2D6 = "You have 2 dice";
    $scope.x2D6Rolls = [];
    $scope.total2D6 = 0;
    $scope.roll2D6 = function () {
            $scope.x2D6Rolls.length = 0;
            $scope.x2D6Rolls = [];
            $scope.x2D6Rolls = rollDice(2, 6);
            $scope.total2D6 = $scope.x2D6Rolls.shift();
    };
    
    $scope.hint3D6 = "You have 3 dice";
    $scope.total3D6 = 0;
    $scope.x3D6Rolls = [];
    $scope.roll3D6 = function () {
            $scope.x3D6Rolls.length = 0;
            $scope.x3D6Rolls = [];
            $scope.x3D6Rolls = rollDice(3, 6);
            $scope.total3D6 = $scope.x3D6Rolls.shift();
    };
    
    $scope.hintD4 = "You have a 4-sided dice";
    $scope.totalD4 = 0;
    $scope.rollD4 = function () {
                $scope.totalD4 = rollDie(4);
    };
    
    $scope.hintD10 = "You have a 10-sided dice";
    $scope.totalD10 = 0;
    $scope.rollD10 = function () {
                $scope.totalD10 = rollDie(10);
    };
    
    $scope.hintD20 = "You have a 20-sided dice";
    $scope.totalD20 = 0;
    $scope.rollD20 = function () {
                $scope.totalD20 = rollDie(20);
    };
    
      function rollDie(bigDie) {
                return(Math.floor(Math.random() * bigDie) + 1);
       }
        
        function rollDice(countOfDice, bigOfDie) {
                var rolls = [];
                var total = 0;
                for(var i = 0; i < countOfDice; i++) {
                        rolls.push(rollDie(bigOfDie));
                        total += rolls[i];  
                }
                
                rolls.unshift(total);
                return(rolls);
        }
});

