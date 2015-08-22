var gulp   = require('gulp');
var fs = require('fs');
var path = require('path');

//Copy ant.properties file to project
gulp.task('copy_release-signing.properties', function(){
  if(!fs.existsSync(path.join('.', 'build', 'platforms', 'android'))){
    fs.mkdirSync(path.join('.', 'build'));
    fs.mkdirSync(path.join('.', 'build', 'platforms'));
    fs.mkdirSync(path.join('.', 'build', 'platforms', 'android'));
  }
  gulp.src(path.join('.', 'android build files', 'release-signing.properties'))
    .pipe(gulp.dest(path.join('.', 'build', 'platforms', 'android')));
});





