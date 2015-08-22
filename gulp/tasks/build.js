var gulp   = require('gulp');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;


//Builds the project
gulp.task('build', function() {
  process.chdir('build');
  return cdv.build();
});