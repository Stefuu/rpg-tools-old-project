var gulp   = require('gulp');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;

// Prepare is not really needed
gulp.task('prepare', function() {
  return cdv.prepare();
});