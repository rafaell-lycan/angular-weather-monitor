var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer');

var config = require('../config').sass;


gulp.task('sass', function () {
  gulp.src(config.src)
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(autoprefix('last 2 version'))
  .pipe(concat('app.css'))
  .pipe(sourcemaps.write(config.dest + 'maps'))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({ stream: true }));
});
