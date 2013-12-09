'use strict';

var fs = require('fs');

var file = fs.readFileSync('index.json');
var myObjectAsAString = JSON.parse(file);
console.log(myObjectAsAString);

// Loop to iterate over objects in json file
for (var aProperty in myObjectAsAString)  {
	console.log(aProperty + ': ' + myObjectAsAString[aProperty] + ': ' 
	+ typeof myObjectAsAString[aProperty] );
}