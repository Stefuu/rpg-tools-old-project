var gulp   = require('gulp');
var path = require('path');
var fs = require('fs');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;

var plugins = require('./../../cordova-plugins.json');
var pkg = require('./../../package.json');

var platforms = [];
var platform_dirs = [];  // List of subdirs with platform files under node_moduels
for (var p in cordova_lib.cordova_platforms) {
  var pname = 'cordova-' + p;
  if (pkg.dependencies[pname]) {
    platforms.push(pname);
    platform_dirs.push(path.join(__dirname, './../../node_modules', pname));
    // TODO: Check if those dirs exist and if not ask the user to run "npm install"
  }
}

// Create the cordova project under ./build/. This version doesn't use cordova
// create, instead just links config.xml and www/
gulp.task('recreate', ['clean'], function() {
  // TODO: remove "uri" when cordova-lib 0.21.7 is released.

  fs.mkdirSync('build');
  process.chdir('build');

  fs.symlinkSync(path.join('..', 'src', 'config.xml'), 'config.xml');
  fs.symlinkSync(path.join('..', 'src', 'www'), 'www');
  // We could alternatively copy www and then watch it to copy changes.
  // Useful if using SASS CoffeeScrite etc.

  // Must first add plugins then platforms. If adding platforms first,
  // cordova fails expecting to find the ./build/plugins directory.
  // TODO: try 3rd param {cli_variables: {...}}.
  return cdv.plugins('add', plugins)
  .then(function() {
    return cdv.platform('add', platform_dirs);
  });
});
