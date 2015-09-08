var gulp = require('gulp'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify');

var config = require('../config').scripts;

gulp.task('scripts', ['browserify', 'minify']);

gulp.task('browserify', function () {
  return browserify(config.src, { debug: true })
  .transform(babelify)
  .bundle()
  .pipe(source(config.fileName))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('minify', function () {
  gulp.src(config.dest)
  .pipe(uglify())
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({ stream: true }));
});
