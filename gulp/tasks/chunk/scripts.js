import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import del from 'del';
import webpack from 'webpack';
import config from '../../config';
import webpackConfig from '../../../webpack.config.babel';

const { dest: DESTINATION_PATH } = config.path;

let compiler = webpack({
  ...webpackConfig,
  devtool: 'source-map'
});

gulp.task('clean.scripts', () => {
  return del(path.join(DESTINATION_PATH, 'js'));
});

gulp.task('build.scripts', ['clean.scripts'], (done) => {
  compiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({ colors: true }));
    done();
  });
});

gulp.task('watch.scripts', ['clean.scripts'], () => {
  compiler.watch({
    aggregateTimeout: 10,
    poll: true
  }, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({ colors: true }));
  });
});
