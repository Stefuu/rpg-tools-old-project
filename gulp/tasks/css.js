var gulp   = require('gulp');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var eventStream = require('event-stream');
var concat = require('gulp-concat');
var handleError = function(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('css', function() {
  var lessFiles = gulp.src('./src/www/less/main.less')
    .pipe(less())
    .on("error", handleError);

  var rawCssFiles = gulp.src('./src/www/css/**/*.css');

  var result = eventStream.merge(lessFiles, rawCssFiles)
    .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
    .pipe(concat('bundle.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/www/dist/css/'));

  return result;
});