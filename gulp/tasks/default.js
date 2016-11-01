'use strict';

// Necessary Plugins
var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'html', 'stylus', 'imagemin',
  'bower-install', 'watch', 'browser-sync']);
