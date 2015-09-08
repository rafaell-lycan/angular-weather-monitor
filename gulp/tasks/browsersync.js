var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    browserSyncSpa = require('browser-sync-spa');

var config = require('../config').browsersync;

gulp.task('browsersync', function() {
  browserSync.use(browserSyncSpa({
    selector: config.spaSelector // Only needed for angular apps
  }));

  browserSync.init({
    open: false,
    server: {
      baseDir: config.dest
    }
  });

  gulp.watch(config.scripts, ['browserify', 'minify']);
  gulp.watch(config.scripts).on('change', browserSync.reload);
  gulp.watch(config.sass, ['sass']);
  gulp.watch(config.html, ['copy-templates']);
  gulp.watch(config.html).on('change', browserSync.reload);
});
