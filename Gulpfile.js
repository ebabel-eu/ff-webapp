'use strict';
var isDev = process.env.NODE_ENV !== 'production';

var babelify = require('babelify');
var browserify = require('browserify');
var connect = require('gulp-connect');
var del = require('del');
var envify = require('envify/custom');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var minifyify = require('minifyify');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var config = {
  js: {
    in: 'app/scripts/client.jsx',
    out: 'dist/scripts/'
  },
  css: {
    in: 'app/styles/',
    out: 'dist/styles/'
  },
  html: {
    in: './app/index.html',
    out: './dist/'
  }
};

function getBundler () {
  var customEnv = isDev ? 'development' : 'production';
  var browserifySettings = {
    entries: [ config.js.in ],
    extensions: [ '.js', '.jsx' ],
    transform: [
      [ babelify, { sourceMaps: isDev } ],
      envify({ NODE_ENV: customEnv })
    ],
    debug: isDev,
    // for watchify
    cache: {},
    packageCache: {}
  };

  if (!isDev) {
    browserifySettings.plugin = [ [
      minifyify, {
        map: false
      }
    ] ];
  }

  return browserify(browserifySettings);
}

function bundle (bundler) {
  gutil.log('Update JavaScript bundle');

  return bundler
    .bundle()
      .on('error', gutil.log)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.js.out));
}

gulp.task('connect', function () {
  return connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('bundle:html', function () {
  return gulp.src(config.html.in)
    .pipe(gulp.dest(config.html.out));
});

gulp.task('clean:js', function () {
  return del.sync([
    config.js.out + '/**'
  ]);
});

gulp.task('bundle:js', ['clean:js'], function () {
  var bundler = getBundler();

  return bundle(bundler);
});

gulp.task('clean:css', function () {
  return del.sync([
    config.css.out + '/**'
  ]);
});

gulp.task('bundle:css', ['clean:css'], function () {
  return gulp.src(config.css.in + '/main.less')
    .pipe(less())
    .pipe(gulpif(isDev, minifyCss()))
    .pipe(gulp.dest(config.css.out));
});

gulp.task('watch:css', ['bundle:css'], function () {
  return gulp.watch(config.css.in + '/**/*.less', ['bundle:css']);
});

gulp.task('watch:js', ['clean:js'], function () {
  var bundler = getBundler();
  // start JS file watching and rebundling with watchify
  var watcher = watchify(bundler, {
    // To run on VM mounted volume
    poll: true
  })
    .on('log', gutil.log)
    .on('update', function () {
      console.log('Updating ...');
      bundle(bundler);
    });

  return bundle(watcher);
});

gulp.task('watch',
  function (callback) {
    runSequence(
      'connect',
      ['watch:js', 'watch:css'],
      callback
    );
  }
);
gulp.task('default', ['connect', 'bundle:js', 'bundle:css', 'bundle:html']);
