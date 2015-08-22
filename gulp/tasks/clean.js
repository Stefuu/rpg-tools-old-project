var gulp   = require('gulp');
var del = require('del');

//Deletes the contents of the build folder
gulp.task('clean', function(cb) {
  del(['build'], cb);
});
