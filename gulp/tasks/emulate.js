var gulp   = require('gulp');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;
var testPlatform = 'android';

//Starts an emulator and runs the app
gulp.task('emulate', function() {
  process.chdir('build');
  return cdv.emulate({platforms:[testPlatform]});
});