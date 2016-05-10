module.exports = function(grunt) {

  grunt.initConfig({
    mocha_istanbul: {
      coverage: {
        src: 'tests', // the folder, not the files
        options: {
          coverageFolder: 'coverage',
          mask: '**/*.spec.js',
          root: 'api/'
        }
      }
    }
  });

  // Adds `grunt-mocha-istanbul`npm task.
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  // Adding test task enabling `grunt test` command.
  grunt.registerTask('test', [
    'mocha_istanbul:coverage'
  ]);

};