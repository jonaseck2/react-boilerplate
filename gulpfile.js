var gulp = require('gulp');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

// Server - listed on localhost:8080
gulp.task('webserver', function() {
  connect.server({
  	root: 'dist',
    livereload: true
  });
});

gulp.task('browserify', function() {
    return gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);

  // Create LiveReload server
  var server = livereload();

  gulp.watch(['src/**/*.*']).on('change', function(file) {
	server.changed(file.path);
  });
});

gulp.task('default', ['browserify', 'copy', 'watch', 'webserver']);
