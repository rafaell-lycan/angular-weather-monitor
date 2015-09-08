var gulp = require('gulp');

var config = require('../config');

gulp.task('copy-templates', function () {
  gulp.src(config.html.src)
  .pipe(gulp.dest(config.html.dest));

  gulp.src(config.views.src)
  .pipe(gulp.dest(config.views.dest));
});
