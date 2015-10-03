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
      '.editorconfig',
      '.jshintrc',
      '.gitignore'
    ]);
  });

  it('inserts user info into project files', function () {
    assert.fileContent('bower.json', /"name": "Starter Pack"/);
    assert.fileContent('package.json', /"name": "Starter Pack"/);
  });
});
