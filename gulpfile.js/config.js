const path = require('path')

module.exports = {
    path: {
        pages: {
            src: p('src/templates/pages/*.pug'),
            dest: p('build/'),
            watch: [p('src/templates/**/*.pug')],
        },
        styles: {
            src: p('src/styles/main.scss'),
            dest: p('build/css/'),
            watch: p('src/styles/*.scss')
        },
        scripts: {
            src: p('src/scripts/main.js'),
            dest: p('build/js/'),
            watch: p('src/scripts/*.js')
        },
        serve: p('./build'),
    }
}

function p(location, root = path.join(__dirname, '../')) {
    return path.join(root, location)
}
