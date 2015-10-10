'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('starter-pack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ name: 'Starter Pack Test' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'Gruntfile.coffee',

      'src/app/index.jade',

      'src/app/includes/footer.jade',
      'src/app/includes/head.jade',
      'src/app/includes/header.jade',

      'src/app/styles/common.styl',
      'src/app/styles/footer.styl',
      'src/app/styles/header.styl',
      'src/app/styles/index.styl',
      'src/app/styles/main.styl',

      'src/assets/images/underconstruction.gif',
      '.gitignore'
    ]);
  });

  it('inserts user info into project files', function () {
    assert.fileContent('bower.json', /"name": "starter-pack-test"/);
    assert.fileContent('package.json', /"name": "starter-pack-test"/);

    assert.fileContent('src/app/includes/head.jade', /Starter Pack Test/);
    assert.fileContent('src/app/includes/header.jade', /Starter Pack Test/);
  });
});
