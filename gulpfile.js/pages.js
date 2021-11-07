const
    gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    pug = require('gulp-pug'),
    config = require('./config.js')

module.exports = function pages() {
    return gulp.src(config.path.pages.src)
        .pipe(pug())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            useShortDoctype: true
        }))
        .pipe(gulp.dest(config.path.pages.dest))
}
