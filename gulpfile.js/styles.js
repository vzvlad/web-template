const gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-dart-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpStylelint = require('gulp-stylelint'),
    config = require('./config.js')

module.exports = function styles() {
    return gulp.src(config.path.styles.src)
        .pipe(plumber())
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ],
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS({level: 2, compatibility: '*'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.styles.dest))
}
