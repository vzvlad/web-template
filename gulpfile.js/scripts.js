const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    config = require('./config.js')

module.exports = function scripts() {
    return gulp.src(config.path.scripts.src)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify({
            mangle: {
                toplevel: true
            },
            output: {
                beautify: false,
                comments: false,
                preamble: ""
            }
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.scripts.dest))
}
