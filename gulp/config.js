var dest = "./build";
var src = './app/';

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
    spaSelector : '[ng-app]',
    dest : dest,
    sass : src + 'src/scss/**/*.scss',
    html : src + 'src/**/*.html',
    scripts : src + 'src/**/*.js'
  },
  clean : {
    dest : dest
  },
  scripts : {
    fileName : 'app.js',
    src: src + 'src/js/app.js',
    dest : dest + '/assets/js'
  },
  sass: {
    src: [
      src + 'src/scss/**/*.scss'
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
      src + 'src/views/*.html'
    ],
    dest : dest + '/views'
  }
};
