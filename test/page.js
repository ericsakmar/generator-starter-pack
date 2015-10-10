'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('StarterPack:generators/page', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/page'))
      .withArguments('newpage')
      .withOptions({ skipInstall: true, force: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/app/newpage.jade',
    ]);
  });
});
