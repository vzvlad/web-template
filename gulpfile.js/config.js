const path = require('path')

module.exports = {
    path: {
        pages: {
            src: p('src/templates/pages/*.pug', glob=true),
            dest: p('build/'),
            watch: [p('src/templates/**/*.pug', glob=true)],
        },
        styles: {
            src: p('src/styles/main.scss'),
            dest: p('build/css/'),
            watch: p('src/styles/*.scss', glob=true)
        },
        scripts: {
            src: p('src/scripts/main.js'),
            dest: p('build/js/'),
            watch: p('src/scripts/*.js', glob=true)
        },
        serve: p('./build'),
    }
}

function p(location, glob = false) {
    // ``path.posix'' forces to use '/', which is always used in globs, regardless of the OS
    // ``path'' uses system-specific slashes: '\\' on Windows, '/' on POSIX
    let pth = glob ? path.posix : path
    let root = pth.normalize(pth.join(__dirname, '../'))
    return pth.join(root, location)
}
