'use strict';

var path = require('path');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var postcss = require('gulp-postcss');
var config = require('../../config');

var SOURCE_PATH = config.path.src;
var DESTINATION_PATH = config.path.dest;

gulp.task('clean.styles', function () {
	return del(path.join(DESTINATION_PATH, 'styles'));
});

gulp.task('build.styles', ['clean.styles'], function () {
	var processors = [
		require('postcss-flexboxfixer'),
		require('postcss-import'),
		require('postcss-cssnext')
	];

	return gulp.src(path.join(SOURCE_PATH, 'styles/*.css'))
		.pipe(postcss(processors))
		.pipe(gulp.dest(path.join(DESTINATION_PATH, 'styles')));
});

gulp.task('watch.styles', ['build.styles'], function () {
	gulp.watch(path.join(SOURCE_PATH, 'styles/**/*.css'), ['build.styles'], function (event) {
		gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});
