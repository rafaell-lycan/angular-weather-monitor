// var gulp = require('gulp'),
//     browserify = require('browserify'),
//     browserSync = require('browser-sync').create(),
//     browserSyncSpa = require('browser-sync-spa'),
//     sass = require('gulp-sass'),
//     source = require('vinyl-source-stream'),
//     sourcemaps = require('gulp-sourcemaps'),
//     runSequence = require('run-sequence'),
//     clean = require('gulp-clean'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     autoprefix = require('gulp-autoprefixer'),
//     babelify = require('babelify'),
//     notify = require('gulp-notify');

var requireDir = require('require-dir');
requireDir('./gulp/', { recurse: true });

// var bases = {
//   app: './app/',
//   tmp: './app/temp/',
//   dist: 'build/',
// };

// var paths = {
//   scripts: ['./app/src/js/**/*.js'],
//   libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
//   styles: ['./app/src/scss/**/*.scss'],
//   html: ['./app/**/*.html'],
//   views: ['./app/**/*.html'],
//   images: ['images/**/*.png'],
//   extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
// };

// gulp.task('clean', function() {
//   return gulp.src(bases.dist, {read: false})
//   .pipe(clean({force: true}));
// });

// gulp.task('browsersync', function() {
//   browserSync.use(browserSyncSpa({
//     selector: '[ng-app]'// Only needed for angular apps
//   }));

//   browserSync.init({
//     open: false,
//     server: {
//       baseDir: bases.dist
//     }
//   });

//   gulp.watch(paths.styles, ['sass']);
//   gulp.watch(paths.html, ['copy-templates']);
//   gulp.watch(paths.scripts, ['browserify', 'minify']);
//   gulp.watch(paths.scripts).on('change', browserSync.reload);
//   gulp.watch(paths.html).on('change', browserSync.reload);
// });

// gulp.task('copy-templates', function () {
//   gulp.src(paths.html)
//   .pipe(gulp.dest(bases.dist));
// });

// gulp.task('browserify', function() {
//   return browserify('./app/src/js/app.module.js', { debug: true })
//   .transform(babelify)
//   .bundle()
//   .pipe(source('app.js'))
//   .pipe(gulp.dest(bases.dist + 'assets/js'))
//   .pipe(browserSync.reload({ stream: true }));
// });

// gulp.task('minify', function () {
//   gulp.src(bases.dist + 'assets/js')
//   .pipe(uglify())
//   .pipe(gulp.dest(bases.dist + 'assets/js'))
//   .pipe(browserSync.reload({ stream: true }));
// });

// gulp.task('build', function (callback) {
//   runSequence('clean',
//       'browserify',
//       ['sass','minify','copy-templates'],
//       'browsersync',
//       callback);
// });

// gulp.task('default', ['clean'], function () {
//   gulp.start('build');
// });
