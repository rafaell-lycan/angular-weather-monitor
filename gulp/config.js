var dest = "./build";
var src = './src/app';

// var paths = {
//   scripts: ['./app/src/js/**/*.js'],
//   libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
//   styles: ['./app/src/scss/**/*.scss'],
//   html: ['./app/**/*.html'],
//   views: ['./app/**/*.html'],
//   images: ['images/**/*.png'],
//   extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
// };

module.exports = {
  browsersync : {
    server: {
      baseDir: [dest, src]
    },
    port           : 3000,
    reloadDelay    : 777,
    reloadDebounce : 333,
    index          : dest + 'index.html',
    debugInfo      : true,
    notify         : true,
    open           : false,
    injectChanges  : true,
    ghostMode : {
      clicks   : true,
      location : true,
      forms    : true,
      scroll   : true
    },
    files: [
      src + '/scss/**/*.scss',
      src + '/**/*.js',
      src + '/img/**',
      src + '/**/*.html'
    ]
  },
  clean : {
    dest : dest
  },
  scripts : {
    fileName : 'app.js',
    src: src + '/js/app.js',
    dest : dest + '/assets/js'
  },
  sass: {
    src: [
      src + '/scss/**/*.scss'
    ],
    dest: dest + '/assets/css'
  },
  html: {
    src: [
      src + 'index.html'
    ],
    dest : dest
  },
  views : {
    src : [
      src + '/views/*.html'
    ],
    dest : dest + '/views'
  },
  watch: {
    html:    src + '/**/*.html',
    sass:    src + '/scss/**/*.{sass,scss}',
    scripts: src + '/**/*.js',
    images:  src + '/img/**/*'
  }
};
