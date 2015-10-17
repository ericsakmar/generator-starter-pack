module.exports = (grunt) ->

  grunt.initConfig
    clean: ["./dist"]

    bower:
      install:
        options:
          targetDir: './dist/lib'

    jade:
      compile:
        options:
          pretty: true
        files: [{
            cwd: './src/app',
            src: '*.jade',
            dest: './dist',
            expand: true,
            ext: '.html'
        }]

    stylus:
      compile:
        files:
          './dist/styles/style.css': ['./src/app/styles/*.styl']

    imagemin:
      all:
        files: [
          {
            expand: true,
            cwd: './src/assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: './dist/assets/images/'
          }
        ]

    coffee:
      compile:
        files:
          './dist/scripts/app.js': ['./src/app/scripts/*.coffee']

    watch:
      jade:
        files: ['./src/app/**/*.jade']
        tasks: ['jade']

      styl:
        files: ['./src/app/styles/*.styl']
        tasks: ['stylus']

      images:
        files: ['./src/app/assets/images/*.{png,jpg,gif}']
        tasks: ['imagemin']

      scripts:
        files: ['./src/app/scripts/*.coffee']
        tasks: ['coffee']

    connect:
      server:
        options:
          port: 3000,
          base: './dist'

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-imagemin'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'dist', ['clean', 'bower', 'stylus', 'jade', 'coffee', 'imagemin']
  grunt.registerTask 'serve', ['connect:server', 'watch']
  grunt.registerTask 'default', ['dist']
