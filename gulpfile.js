'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass');

gulp.task('move', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
  gulp.src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('build', ['move', 'sass']);

gulp.task('server', ['build'], function() {
  gulp.src('build')
    .pipe(webserver({ host: '0.0.0.0' }));
});

gulp.watch('./src/**/*.html', ['move']);
gulp.watch('./src/styles/**/*.scss', ['sass']);

gulp.task('default', ['server'], function() {});
