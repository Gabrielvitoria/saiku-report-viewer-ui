'use strict';

module.exports = {
  source: {
    html: './src/index.html',
    js: './src/js/**/*.js',
    styl: './src/styl/**/*.styl',
    img: './src/img/**/*',
    files: {
      styl: './src/styl/main.styl'
    }
  },

  browserSync: {
    html: './build/**/*.html',
    css: './build/css/**/*.css',
    js: './build/js/**/*.js',
    img: './build/img/**/*'
  },

  build: {
    html: './build/',
    css: './build/css',
    js: './build/js',
    img: './build/img',
  },

  deploy: {
    pages: './build/**/*'
  }
};
