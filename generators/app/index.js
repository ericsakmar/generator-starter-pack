'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mind-blowing ' + chalk.red('StarterPack') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    root: function () {
      this.fs.copy(this.templatePath('_package.json'), this.destinationPath('package.json'));
      this.fs.copy(this.templatePath('_bower.json'), this.destinationPath('bower.json'));
      this.fs.copy(this.templatePath('_Gruntfile.coffee'), this.destinationPath('Gruntfile.coffee'));
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    },

    src: function() {
      this.fs.copy(this.templatePath('src/app/index.jade'), this.destinationPath('src/app/index.jade'));
      this.fs.copy(this.templatePath('src/app/includes/footer.jade'), this.destinationPath('src/app/includes/footer.jade'));
      this.fs.copy(this.templatePath('src/app/includes/head.jade'), this.destinationPath('src/app/includes/head.jade'));
      this.fs.copy(this.templatePath('src/app/includes/header.jade'), this.destinationPath('src/app/includes/header.jade'));
    },

    assets: function() {
      this.fs.copy(this.templatePath('assets/images/underconstruction.gif'), this.destinationPath('assets/images/underconstruction.gif'));
    }
  },

  install: function () {
    this.installDependencies();
  }
});
