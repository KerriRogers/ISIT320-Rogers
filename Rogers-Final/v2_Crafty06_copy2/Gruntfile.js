/* this file is used to list the files to not include in the testing karma
 * Kerri Rogers 12/12/13
*/

	module.exports = function(grunt) { 'use strict';

	grunt.initConfig({
		jshint: {
			files: ['**/*.js'],

			options: {
				
				ignores: [
					'angular-mocks.js',
					'angular-resource.js', 
					'coverage/**/prettify.js',
					'*/ui-bootstrap-tpls-*.js',
					'*/knockout-*.js', 
					'*/Ractive.js', 
					//this was '*/**/angular.js',
					'angular.js',
					'**/Library/**', 
					'**/node_modules/**',
					'**/handlebars.js',
					'**/jquery*.js',
					'**/cordova*.js',
					'**/qunit*.js'],
				reporter: 'checkstyle',
				reporterOutput: 'result.xml',
				strict: true,
				newcap: false
			}
		},
		
		clean :	{			
			yourTarget : {				
				src : [ "**/node_modules/**", '*/barFooGoo/**'
				]				
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};