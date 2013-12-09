/**
 * @author Ziggy
 */

angular.module('kerriApp', [])
.controller('MyController', function($scope) {
	$scope.hint = "Enter a number of miles then press the buttons to see conversions.";

	// You don't have to call getElementById. Calling getElementById is DOM manipulation,
	// and we should not have to do any DOM manipulation with Angular 
	// $scope.miles = document.getElementById('input').value;
	// So we just initialize the value
	
	$scope.miles = 0;
	$scope.operandB = 5280;
	$scope.func = function() {
		return $scope.miles * $scope.operandB;
	};
		
	$scope.convertMilesToInches = function() {
		return $scope.miles * 5280 * 12;
	};

	$scope.convertMilesToFeet = function() {
		// again, don't call getElementById
		// var input = document.getElementById("input").valueOf;
		// total = input * 5280;
		//return(total);
		
		$scope.milesToFeet = $scope.miles * 5280;	
		return $scope.milesToFeet;	
	};

	$scope.convertMilesToYards = function() {
		$scope.milesToYards = $scope.miles * 5280 / 3;
	};

	$scope.convertMilesToKilometers = function() {
		$scope.milesToKilometers = ($scope.miles * 5280) * .000304;
	};

	$scope.convertKilometersToMiles = function() {
		return ($scope.miles * 5280 * .000304) / 1.6;
	};

});
