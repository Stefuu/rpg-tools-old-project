var gulp   = require('gulp');
var path = require('path');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;

gulp.task('release', ['copy_release-signing.properties'], function() {
  process.chdir('build');
  return cdv.build({options: ['--release']});
  // gulp.src('./android build files/ant.properties').pipe(gulp.dest(path.join('.', 'build', 'platforms', 'android')));
  // TODO: copy the apk file(s) out of ./build/.
});