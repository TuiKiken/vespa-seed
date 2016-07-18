'use strict';

var path = require('path');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../../config');

var SOURCE_PATH = config.path.src;
var DESTINATION_PATH = config.path.dest;

gulp.task('clean.html', function () {
  return del(path.join(DESTINATION_PATH, '**/*.html'));
});

gulp.task('build.html', ['clean.html'], function () {
  return gulp.src(path.join(SOURCE_PATH, '**/*.html'))
    .pipe(gulp.dest(DESTINATION_PATH));
});

gulp.task('watch.html', ['build.html'], function () {
  gulp.watch(path.join(SOURCE_PATH, '**/*.html'), ['build.html'], function (event) {
    gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
