var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var jshint = require('gulp-jshint');
var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var order = require('gulp-order');

// Define default destination folder
var dest = 'static/';

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})

var paths = {
    // scripts: ['./js/**/*.coffee', '!client/external/**/*.coffee'],
    scripts: ['/static/js/**/*'], 
    images: '/static/img/**/*',
    sass: '/static/sass/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});

gulp.task('sass', function () {
  gulp.src('/static/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('/static/css'));
});

// gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  // return gulp.src(paths.scripts)
  //   // .pipe(sourcemaps.init())
  //   //   .pipe(coffee())
  //   .pipe(uglify())
  //   .pipe(concat('all.min.js'))
  //   .pipe(sourcemaps.write())
  //   .pipe(gulp.dest('build/js'));
// });
//

/**
 * Load bower js files
 */
gulp.task('js', function() {
	var jsFiles = ['src/js/*'];
	gulp.src(mainBowerFiles().concat(jsFiles))
		.pipe(filter('*.js'))
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('static/js'));
});

/**
 * Load bower css files
 */
gulp.task('css', function() {
	var cssFiles = ['src/css/*'];
	gulp.src(mainBowerFiles().concat(cssFiles))
		.pipe(filter('*.css'))
		.pipe(order([
			'normalize.css',
			'*'
		]))
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('static/css'));
});

/**
 * JSLint/JSHint validation
 */
gulp.task('lint', function() {
  return gulp.src('/static/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.sass, ['sass']);
});
 
gulp.task('default', ['watch', 'lint', 'sass', 'css']);

// gulp.task('default', function() {
//     // place code for your default task here
// });

