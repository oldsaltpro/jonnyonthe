module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['src/**/*.js'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['compass:dev']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['dist/**/*.js'],
        tasks: ['uglify']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', 'css/*.css', 'images/*', 'dist/*'],
        options: {
          livereload: true
        }
      },
    }

  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['compass:dev', 'concat', 'uglify', 'watch']);

}