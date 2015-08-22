var gulp   = require('gulp');
var browserify = require('gulp-browserify');
var eventStream = require('event-stream');
var concat = require('gulp-concat');
var handleError = function(err) {
  console.log(err.toString());
  this.emit('end');
}
var paths = {
  js: {
    vendor: ['./node_modules/jquery/dist/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js'],
    files: ['./src/www/js/**/*.js', './src/www/js/**/*.jsx'],
    main: './src/www/js/main.js'
  },
};

//Compiles the jsx files into a single js.
gulp.task('js', function(){
  var browserifiedFiles = gulp.src(paths.js.main)
    .pipe(browserify({transform: 'reactify'}))
    .on('error', handleError);

  var vendorFiles = gulp.src(paths.js.vendor);

  var result = eventStream.merge(vendorFiles, browserifiedFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./src/www/dist/js/'));

  return result;
});