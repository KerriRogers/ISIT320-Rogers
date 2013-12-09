/**
 * @author Ziggy
 * this is boilerplate that will get Jasmine going line 22 down
 */

describe("mycontrollertest", function() {'use strict'; 
	var myController = null; 
	// var pc = null;
	
	beforeEach(module('kerriApp'));

	beforeEach(inject(function($rootScope, $controller) {
    	myController = $rootScope.$new();
   		$controller('MyController', { $scope: myController }); 
	}));

	it("Test hint", function() {
     	expect(myController.hint).toEqual("Enter a number of miles then press the buttons to see conversions.");
      });
	
	it("TestMilesToFeet", function()  {
		myController.miles = 1;
		var actual = myController.convertMilesToFeet();
		expect(actual).toEqual(5280);
	});
	
	it("TestMilesToInches", function() {
		myController.miles = 1;
		var actual = myController.convertMilesToInches();
		expect(actual).toEqual(63360);
		
	});
	
	it("TestMilesToYards", function() {
		myController.miles = 1;
		var actual = myController.convertMilesToYards();
		expect(actual).toEqual(1760);
			
	});
	
	it("TestMilesToKilometers", function() {
		myController.miles = 1;
		var actual = myController.convertMilesToKilometers();
		expect(actual).toEqual(1.60512);
			
	});
	
	it("TestKilometersToMiles", function() {
		myController.miles = 1;
		var actual = myController.convertKilometersToMiles();
		expect(actual).toEqual(1.0032);
			
	});
});


(function() {'use strict';
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var reporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(reporter);

    jasmineEnv.specFilter = function(spec) {
        return reporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();