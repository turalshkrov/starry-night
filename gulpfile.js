const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const cssnano = require('gulp-cssnano');

function buildStyles() {
  return src('starry-night/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(cssnano())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['starry-night/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)