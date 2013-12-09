/**
 * @author Charlie Calvert
 */


angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Kerri Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    
    $scope.loadMongoData = function() {    
        $scope.presidents = presidents.query({}, function(users) {
          $scope.presidentsLength = $scope.presidents.length;
          console.log($scope.presidentsLength);
        });
    };
	
	$scope.loadJson = function() {	
    	var getDataJson = $http.get('data.json');
    
    	getDataJson.success(function(data, status, headers, config)  {
    		$scope.data = data;
    	});
    	
    	getDataJson.error(function(data, status, headers, config) {
    		throw new Error('Oh no! An Error!');
    	});
	};
	
	$scope.loadAll = function() {
	    $scope.loadMongoData();
	    $scope.loadJson();
	};	

});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/frenchi/collections/spodie/:id', {
      apiKey:'3h82ollQOYSvkSs4txvfErmkNtDZN4uq',     
    });
	
/*	var Presidents = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents/:id', {
      apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',     
    });
	*/

    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };
	
	Presidents.prototype.getTermEnd = function() {
    	return this.termEnd;
    };
	
	Presidents.prototype.getBorn = function() {
    	return this.born;
    };

    return Presidents;    
	 
	// return { a: 2 };		
});
