'use strict';

var path = require('path');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var objectAssign = require('object-assign');
var webpack = require('webpack');
var config = require('../../config');
var wpconf = require('../../../webpack.config');
var compiler = webpack(objectAssign(
	wpconf,
	{devtool: 'source-map'}
));

var DESTINATION_PATH = config.path.dest;

gulp.task('clean.scripts', function () {
	return del(path.join(DESTINATION_PATH, 'js'));
});

gulp.task('build.scripts', ['clean.scripts'], function (done) {
	compiler.run(function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack', err);
		}
		gutil.log('[webpack]', stats.toString({
			colors: true
		}));
		done();
	});
});

gulp.task('watch.scripts', ['clean.scripts'], function () {
	compiler.watch({
		aggregateTimeout: 10,
		poll: true
	}, function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack', err);
		}
		gutil.log('[webpack]', stats.toString({
			colors: true
		}));
	});
});
