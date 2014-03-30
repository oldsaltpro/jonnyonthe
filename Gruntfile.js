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
        src: ['src/vendor/TweenMax.js', 'src/vendor/respond.js', 'src/vendor/slimScroll.js', 'src/vendor/fullpage.js', 'src/vendor/Swipebox.js', 'src/*.js' ],
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
        files: ['src/**/*.js'],
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
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['compass:dev', 'concat', 'uglify', 'watch']);
}