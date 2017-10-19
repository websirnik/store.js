var gulp = require('gulp');
var del = require('del');
var browserify = require('gulp.browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task('del', () => {
  return del('dist/store.bundle.js')
});

gulp.task('default', ['del'], () => {
  return browserify('dist/store.modern.js' ,{
  	standalone: 'store'
  })
    .pipe(source('store.bundle.js'))
    // .pipe(buffer())
  	// .pipe(uglify())
    .pipe(gulp.dest('dist'));
});