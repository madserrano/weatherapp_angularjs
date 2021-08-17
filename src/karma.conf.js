// Karma configuration
// Generated on Fri Dec 16 2016 13:09:51 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'dist/debug.js',
      'test/*spec.js'
    ],
    exclude: [
      'src/node.js'
    ],
	plugins: [
	'karma-coverage',
	],

    preprocessors: {
    },   
	reporters: ['progress', 'coverage'],	
	preprocessors: {
			'src/app/**/*.js': ['coverage']
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
