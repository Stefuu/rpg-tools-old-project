/* jshint node:true */

/*

An experimental gulpfile that manages a simple cordova based app using
cordova-lib directly without cordova-cli.

Cordova project is created under ./build/ and treated as a build artifact.
`gulp clean` removes the build directory.
`gulp recreate` creates it afresh.

*/

/* General */

var pkg = require('./package.json');
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var del = require('del');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var eventStream = require('event-stream');

/* JS */

var browserify = require('gulp-browserify');  // Bundles JS.

/* CSS */

var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

/* Cordova */

var plugins = require('./cordova-plugins.json');
var cordova_lib = require('cordova-lib');
var cdv = cordova_lib.cordova.raw;

/*   Android */

// Platform to use for run/emulate. Alternatively, create tasks like runios, runandroid.
var testPlatform = 'android';
var buildDir = path.join(__dirname, 'build');

// List of platforms determined form pkd.dependencies. This way platform file
// downloading and version preferences are entirely handled by npm install.
var platforms = [];  // List like ['cordova-ios', 'cordova-android']
var platform_dirs = [];  // List of subdirs with platform files under node_moduels
for (var p in cordova_lib.cordova_platforms) {
  var pname = 'cordova-' + p;
  if (pkg.dependencies[pname]) {
    platforms.push(pname);
    platform_dirs.push(path.join(__dirname, 'node_modules', pname));
    // TODO: Check if those dirs exist and if not ask the user to run "npm install"
  }
}

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

//Define the prepare function, that copies all files from src to build and prepares the app to be used with PhonegapApp

var prepare = function(){
  var currentDir = process.cwd();
  process.chdir(buildDir);
  cdv.prepare();
  process.chdir(currentDir);
};

//////////////////////// TASKS /////////////////////////////

// All cordova-lib calls (except "cordova create") must be done from within
// the cordova project dir because cordova-lib determines projectRoot from
// process.cwd() in cordova-lib/src/cordova/util.js:isCordova()

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

//Compiles the jsx files into a single js.
gulp.task('js', function(){
  var browserifiedFiles = gulp.src(paths.js.main)
    .pipe(browserify({transform: 'reactify'}))
    .on('error', handleError);

  var vendorFiles = gulp.src(paths.js.vendor);

  var result = eventStream.merge(vendorFiles, browserifiedFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./src/www/dist/js/'));

//  prepare();

  return result;
});

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

//  prepare();

  return result;
});

//Run gulp js and gulp css
gulp.task('js-css', ['css', 'js'], function(){

});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.css.files, ['css']);
  gulp.watch(paths.js.files, ['js']);
});

//Deletes the contents of the build folder
gulp.task('clean', function(cb) {
  // Alternative package for cleaning is gulp-rimraf
  del(['build'], cb);
});

// Prepare is not really needed
gulp.task('prepare', function() {
  process.chdir(buildDir);
  return cdv.prepare();
});

//Builds the project
gulp.task('build', function() {
  process.chdir(buildDir);
  return cdv.build();
});

//Runs the app in a connected device
gulp.task('run', function(cb) {
  process.chdir(buildDir);
  return cdv.run({platforms:[testPlatform], options:['--device']});
});

//Starts an emulator and runs the app
gulp.task('emulate', function() {
  process.chdir(buildDir);
  return cdv.emulate({platforms:[testPlatform]});
});

gulp.task('release', ['copy_release-signing.properties'], function() {
  process.chdir(buildDir);
  return cdv.build({options: ['--release']});
  // gulp.src('./android build files/ant.properties').pipe(gulp.dest(path.join('.', 'build', 'platforms', 'android')));
  // TODO: copy the apk file(s) out of ./build/.
});

//Copy ant.properties file to project
gulp.task('copy_release-signing.properties', function(){
  if(!fs.existsSync(path.join('.', 'build', 'platforms', 'android'))){
    fs.mkdirSync(path.join('.', 'build'));
    fs.mkdirSync(path.join('.', 'build', 'platforms'));
    fs.mkdirSync(path.join('.', 'build', 'platforms', 'android'));
  }
  gulp.src('./android build files/release-signing.properties').pipe(gulp.dest(path.join('.', 'build', 'platforms', 'android')));
});

// Create the cordova project under ./build/. This version doesn't use cordova
// create, instead just links config.xml and www/
gulp.task('recreate', ['clean'], function() {
  // TODO: remove "uri" when cordova-lib 0.21.7 is released.
  var srcDir = path.join(__dirname, 'src');

  fs.mkdirSync(buildDir);
  process.chdir(buildDir);

  fs.symlinkSync(path.join('..', 'src', 'config.xml'), 'config.xml');
  fs.symlinkSync(path.join('..', 'src', 'www'), 'www');
  // We could alternatively copy www and then watch it to copy changes.
  // Useful if using SASS CoffeeScrite etc.

  // Must first add plugins then platforms. If adding platforms first,
  // cordova fails expecting to find the ./build/plugins directory.
  // TODO: try 3rd param {cli_variables: {...}}.
  return cdv.plugins('add', plugins)
  .then(function() {
    return cdv.platform('add', platform_dirs)
    .then(function(){
      runSequence(['css', 'js']);
    });
  });
});

// Alternative version of recreate that uses "cordova create" rather than
// creating the links manually.
gulp.task('cdvcreate', ['clean'], function() {
  // TODO: remove "uri" when cordova-lib 0.21.7 is released.
  var srcDir = path.join(__dirname, 'src');
  var cfg = {lib: {www: {uri: srcDir, url: srcDir, link: true}}};

  // TODO: Can app id be saved in package.json
  var appId = 'org.primeiroportal.chronos';
  return cdv.create(buildDir, appId, pkg.name, cfg)
  .then(function() {
    // Further Cordova commands must be run inside the cordova project dir.
    process.chdir(buildDir);
  })
  .then(function() {
    return cdv.platform('add', platform_dirs);
  })
  .then(function() {
    // TODO: try 3rd param, cli_variables etc.
    return cdv.plugins('add', plugins);
  });
});
