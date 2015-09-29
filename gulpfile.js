var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

var paths = {
    // scripts: ['./js/**/*.coffee', '!client/external/**/*.coffee'],
    scripts: ['./static/js/**/*'],
    images: './static/img/*',
    sass: './static/sass/*'
};

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
});

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return plugins.del(['dist']);
});

gulp.task('sass', function () {
  gulp.src('./static/sass/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('./static/css'));
});

/**
 * Load bower js files
 */
gulp.task('js', function() {
	var jsFiles = ['src/js/*'];
	gulp.src(mainBowerFiles().plugins.concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('vendor.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('static/js'));
});

/**
 * Load bower css files
 */
gulp.task('css', function() {
	var cssFiles = ['src/css/*', 'dist/css/*'];
	gulp.src(mainBowerFiles().concat(cssFiles))
		.pipe(plugins.filter('*.css'))
		.pipe(plugins.order([
			'normalize.css',
			'*'
		]))
		.pipe(plugins.concat('vendor.css'))
		.pipe(gulp.dest('static/css'));
});

/**
 * JSLint/JSHint validation
 */
gulp.task('lint', function() {
  return gulp.src('/static/js/*.js')
  .pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter('default'));
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

