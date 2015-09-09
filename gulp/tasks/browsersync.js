var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    browsersyncspa = require('browser-sync-spa');

var config = require('../config').browsersync;

gulp.task('browsersync', ['build'], function() {
  browsersync.use(browsersyncspa({
    selector: '[ng-app]' // Only needed for angular apps
  }));

  browsersync(config);
});
