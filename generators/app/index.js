'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay'),
    slugify = require("underscore.string/slugify");

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mind-blowing ' + chalk.red('StarterPack') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }];

    this.prompt(prompts, function (props) {
      props.projectName = slugify(props.name);
      this.props = props;

      done();
    }.bind(this));
  },

  writing: {
    root: function () {
      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.props);
      this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.props);
      this.fs.copy(this.templatePath('_Gruntfile.coffee'), this.destinationPath('Gruntfile.coffee'));
      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    },

    src: function() {
      this.fs.copy(this.templatePath('src/app/index.jade'), this.destinationPath('src/app/index.jade'));

      this.fs.copy(this.templatePath('src/app/includes/footer.jade'), this.destinationPath('src/app/includes/footer.jade'));
      this.fs.copyTpl(this.templatePath('src/app/includes/head.jade'), this.destinationPath('src/app/includes/head.jade'), this.props);
      this.fs.copyTpl(this.templatePath('src/app/includes/header.jade'), this.destinationPath('src/app/includes/header.jade'), this.props);

      this.fs.copy(this.templatePath('src/app/styles/common.styl'), this.destinationPath('src/app/styles/common.styl'));
      this.fs.copy(this.templatePath('src/app/styles/footer.styl'), this.destinationPath('src/app/styles/footer.styl'));
      this.fs.copy(this.templatePath('src/app/styles/header.styl'), this.destinationPath('src/app/styles/header.styl'));
      this.fs.copy(this.templatePath('src/app/styles/index.styl'), this.destinationPath('src/app/styles/index.styl'));
      this.fs.copy(this.templatePath('src/app/styles/main.styl'), this.destinationPath('src/app/styles/main.styl'));
    },

    assets: function() {
      this.fs.copy(this.templatePath('src/assets/images/underconstruction.gif'), this.destinationPath('src/assets/images/underconstruction.gif'));
    }
  },

  install: function () {
    this.installDependencies();
  }
});
