'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');

// Copy HTML file to folder `build/`
module.exports = gulp.task('html', function() {
  return gulp.src(paths.source.html)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.html));
});
