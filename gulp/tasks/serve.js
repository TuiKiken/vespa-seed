'use strict';

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync').create();
var config = require('../config');

var DESTINATION_PATH = config.path.dest;

gulp.task('serve', ['watch'], function () {
  browserSync.init({
    // logLevel: 'debug',
    server: {
      baseDir: DESTINATION_PATH
    },
    files: [
      path.join(DESTINATION_PATH, '**/*.html'),
      path.join(DESTINATION_PATH, '**/*.js'),
      path.join(DESTINATION_PATH, '**/*.css')
    ]
  });
});
