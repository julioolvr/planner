'use strict';

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    rename = require('gulp-rename'),
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
    webpack({
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: '6to5-loader' }
        ]
      },
      entry: './src/js/index.jsx',
      output: {
        filename: 'bundle.js'
      },
      devtool: '#inline-source-map'
    })
    .pipe(rename(function(path) {
      path.extname = '.js';
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('build', ['move', 'sass', 'js']);

gulp.task('server', ['build'], function() {
  gulp.src('build')
    .pipe(webserver({ host: '0.0.0.0' }));
});

gulp.watch('./src/**/*.html', ['move']);
gulp.watch('./src/styles/**/*.scss', ['sass']);
gulp.watch('./src/js/**/*.{js,jsx}', ['js']);

gulp.task('default', ['server'], function() {});
