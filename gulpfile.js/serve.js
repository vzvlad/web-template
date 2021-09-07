const
    gulp = require('gulp'),
    styles = require('./styles'),
    scripts = require('./scripts'),
    pages = require('./pages'),
    config = require('./config.js'),
    server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch(config.path.pages.watch, gulp.series(pages, readyReload))
    gulp.watch(config.path.styles.watch, gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch(config.path.scripts.watch, gulp.series(scripts, readyReload))

    cb()
}
