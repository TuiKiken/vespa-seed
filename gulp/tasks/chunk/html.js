import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import del from 'del';
import config from '../../config';

const { src: SOURCE_PATH, dest: DESTINATION_PATH } = config.path;

gulp.task('clean.html', () => {
  return del(path.join(DESTINATION_PATH, '**/*.html'));
});

gulp.task('build.html', ['clean.html'], () => {
  return gulp.src(path.join(SOURCE_PATH, '**/*.html'))
    .pipe(gulp.dest(DESTINATION_PATH));
});

gulp.task('watch.html', ['build.html'], () => {
  gulp.watch(path.join(SOURCE_PATH, '**/*.html'), ['build.html'], (event) => {
    gutil.log(`File ${event.path} was ${event.type}, running tasks...`);
  });
});
