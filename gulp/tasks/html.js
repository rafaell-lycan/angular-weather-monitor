var gulp = require('gulp'),
    browsersync  = require('browser-sync');

var config = require('../config');

gulp.task('copy:html', function () {
  gulp.src(config.html.src)
  .pipe(gulp.dest(config.html.dest));

  gulp.src(config.views.src)
  .pipe(gulp.dest(config.views.dest));

  browsersync.reload();
});
