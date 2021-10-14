const
    gulp = require('gulp'),
    squoosh = require('gulp-squoosh'),
    config = require('./config.js')

module.exports = function images() {
    return gulp.src(config.path.images.src)
        .pipe(squoosh())
        .pipe(gulp.dest(config.path.images.dest))
}
