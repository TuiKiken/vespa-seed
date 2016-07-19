import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import del from 'del';
import postcss from 'gulp-postcss';
import config from '../../config';

const { src: SOURCE_PATH, dest: DESTINATION_PATH } = config.path;

gulp.task('clean.styles', () => {
  return del(path.join(DESTINATION_PATH, 'styles'));
});

gulp.task('build.styles', ['clean.styles'], () => {
  let processors = [
    require('postcss-flexboxfixer'),
    require('postcss-import'),
    require('postcss-cssnext')
  ];

  return gulp.src(path.join(SOURCE_PATH, 'styles/*.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest(path.join(DESTINATION_PATH, 'styles')));
});

gulp.task('watch.styles', ['build.styles'], () => {
  gulp.watch(path.join(SOURCE_PATH, 'styles/**/*.css'), ['build.styles'], (event) => {
    gutil.log(`File ${event.path} was ${event.type}, running tasks...`);
  });
});
