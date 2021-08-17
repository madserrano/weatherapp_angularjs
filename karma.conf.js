// Karma configuration
// Generated on Fri Dec 16 2016 13:09:51 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    files: [
      'dist/debug.js',
	  'test/*spec.js'
    ],
    exclude: [
      'src/node.js'
    ],
	plugins: [
	'karma',
	'karma-coverage',
	require('karma-coverage'),
	require('karma-jasmine'),
    require('karma-chrome-launcher'),
    require('karma-remap-istanbul'),        
	require('@angular-devkit/build-angular/plugins/karma')
	],

    preprocessors: {
    },   
	reporters: ['progress', 'coverage'],	
	preprocessors: {
          'modules/**/*.js': ['coverage'],
          'js/servicess.js': ['coverage'],
		  './src/test.ts': ['@angular/cli'],
		  'src/app/**/*.ts': ['coverage']
	},
	coverageReporter: {
			type : 'lcov',
			dir : 'coverage/'
	},	
	customLaunchers: {
		  ChromeHeadlessNoSandbox: {
			base: 'ChromeHeadless',
			flags: ['--no-sandbox']
		  }
	},
	
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
