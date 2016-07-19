import gulp from 'gulp';
import path from 'path';
import { create as browserSyncCreator } from 'browser-sync';
import config from '../config';

const { dest: DESTINATION_PATH } = config.path;

let browserSync = browserSyncCreator();

gulp.task('serve', ['watch'], () => {
  browserSync.init({
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
