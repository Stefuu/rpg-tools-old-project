var gulp   = require('gulp');
//define the paths of files in the app
var paths = {
  js: {
    vendor: ['./node_modules/jquery/dist/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js'],
    files: ['./src/www/js/**/*.js', './src/www/js/**/*.jsx'],
    main: './src/www/js/main.js'
  },
  css: {
    files: ['./src/www/less/**/*.less', './src/www/css/**/*.css',]
  }
};

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.css.files, ['css']);
  gulp.watch(paths.js.files, ['js']);
  //gulp.watch(paths.css.files.concat(paths.js.files), ['prepare']);
});