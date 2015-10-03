'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('starter-pack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'Gruntfile.coffee',
      'src',
      'src/app',
      'src/app/index.jade',
      'assets',
      'assets/images',
      'assets/images/underconstruction.gif',
      '.gitignore'
    ]);
  });

  it('inserts user info into project files', function () {
    assert.fileContent('bower.json', /"name": "starter-pack"/);
    assert.fileContent('package.json', /"name": "starter-pack"/);
  });
});
