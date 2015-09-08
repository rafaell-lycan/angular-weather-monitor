var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence('clean',
      ['sass','scripts','copy-templates'],
      'browsersync',
      callback);
});
