var gulp = require('gulp');
var del = require('del');
var browserify = require('gulp.browserify');
var source = require('vinyl-source-stream');

gulp.task('del', () => {
  return del('dist/store.bundle.js')
});

gulp.task('default', ['del'], () => {
  return browserify('dist/store.modern.js' ,{
  	standalone: 'store'
  })
    .pipe(source('store.bundle.js'))
    .pipe(gulp.dest('dist'));
});