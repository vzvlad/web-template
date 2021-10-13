const
    gulp = require('gulp'),
    styles = require('./styles'),
    scripts = require('./scripts'),
    pages = require('./pages'),
    config = require('./config.js'),
    server = require('browser-sync').create()


module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch(config.path.pages.watch, gulp.series(pages))
    gulp.watch(config.path.styles.watch, gulp.series(styles))
    gulp.watch(config.path.scripts.watch, gulp.series(scripts))
    gulp.watch(config.path.serve, server.reload)

    return cb()
}
