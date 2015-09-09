var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence('clean',
      [
        'copy:html',
        'sass',
        'scripts'
      ],
      callback);
});
