module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      wiredep: {
        task: {
          src: [ 'index.html' ],
          options: { }
          }
      },
	    watch: {
        files: ['index.html', 'bower_components/*'],
        tasks: ['wiredep']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-wiredep');

   // Default task(s).
   grunt.registerTask('default', ['wiredep','watch']);
};
