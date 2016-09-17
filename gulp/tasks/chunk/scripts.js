import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import del from 'del';
import webpack from 'webpack';
import { CLIEngine as ESLint } from 'eslint';
import config from '../../config';
import webpackConfig from '../../../webpack.config.babel';

const { src: SOURCE_PATH, dest: DESTINATION_PATH } = config.path;

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

gulp.task('lint.scripts', () => {
  let eslint = new ESLint();
  let formatter = eslint.getFormatter();
  let lintPaths = gutil.env.dev ? [
    'gulpfile.babel.js',
    'webpack.config.babel.js',
    'gulp'
  ] : [
    path.join(SOURCE_PATH, 'js')
  ];
  let report = eslint.executeOnFiles(lintPaths);

  gutil.log('[eslint]', formatter(report.results));
});
