/* eslint-disable prefer-arrow-callback */
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function build() {
  return gulp.src('deline.js').pipe(babel()).pipe(gulp.dest('dist'));
});
