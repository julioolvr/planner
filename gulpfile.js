'use strict';

var gulp = require('gulp'),
    to5 = require('gulp-6to5'),
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

gulp.task('js', function() {
  gulp.src('./src/js/**/*.js')
    .pipe(to5())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('build', ['move', 'sass', 'js']);

gulp.task('server', ['build'], function() {
  gulp.src('build')
    .pipe(webserver({ host: '0.0.0.0' }));
});

gulp.watch('./src/**/*.html', ['move']);
gulp.watch('./src/styles/**/*.scss', ['sass']);
gulp.watch('./src/js/**/*.js', ['js']);

gulp.task('default', ['server'], function() {});
