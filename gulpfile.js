'use strict';
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'app',
    ext: 'js',
    nodeArgs: ['--debug']
  })
});

gulp.task('default', ['nodemon']);