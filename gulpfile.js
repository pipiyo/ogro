'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass');

gulp.task('jquery', function () {
  gulp.src('./public/js/*.js')
  .pipe(concat('jquery.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public'))
});

gulp.task('sass', function () {
  return gulp.src('./public/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});
 
gulp.task('watch', function () {
  gulp.watch('./public/style/*.scss', ['sass']);
  gulp.watch('./public/js/*.js', ['jquery']);
});