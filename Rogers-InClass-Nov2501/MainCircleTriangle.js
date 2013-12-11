/**
 * Kerri Rogers
 */
var thisApp = angular.module("thisApp", ['circleModule', 'triangleMod']);

//angular.module ('mainModule', ['circleModule', 'triangleModule'])
thisApp.controller ('mainController', function($scope, circleFactory, triangleFactory){'use strict';
        $scope.name = "mainController";
        $scope.GetAreaofCircle = circleFactory.GetAreaofCircle;
        $scope.pythagorus = triangleFactory.pythagorus;
        
});
