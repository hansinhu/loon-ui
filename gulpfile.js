'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('./src/style/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/style'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/style/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/style/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
