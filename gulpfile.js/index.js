const
    gulp = require('gulp'),
    serve = require('./serve'),
    styles = require('./styles'),
    scripts = require('./scripts'),
    pages = require('./pages'),
    images = require('./images'),
    clean_served = require('./clean_served')

const dev = gulp.parallel(pages, styles, scripts, images)

const build = gulp.series(clean_served, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = gulp.series(build)
