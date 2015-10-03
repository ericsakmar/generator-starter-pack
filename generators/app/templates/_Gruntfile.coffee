module.exports = (grunt) ->

  grunt.initConfig
    clean: ["./dist"]

    bower:
      install:
        options:
          targetDir: './dist'

    jade:
      compile:
        options:
          pretty: true

        files:
          "./dist/index.html": ["./src/app/index.jade"]

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

  grunt.registerTask 'dist', ['clean', 'bower', 'stylus', 'jade', 'imagemin']
  grunt.registerTask 'serve', ['dist', 'connect:server', 'watch']
  grunt.registerTask 'default', ['dist']
