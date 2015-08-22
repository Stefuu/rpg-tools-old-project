var gulp   = require('gulp');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;
var testPlatform = 'android';

//Runs the app in a connected device
gulp.task('run', function(cb) {
  process.chdir('build');
  return cdv.run({platforms:[testPlatform], options:['--device']});
});