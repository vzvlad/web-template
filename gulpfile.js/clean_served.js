const del = require('del'),
    config = require('./config.js')

module.exports = function clean_served(cb) {
    del(config.path.serve).then(() => {
        cb()
    })
}