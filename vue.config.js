const path = require('path')

module.exports = {
    lintOnSave: process.env.NODE_ENV === 'production',
    configureWebpack: {
        resolve: {
            alias: {
                '@c': path.resolve(__dirname, './src/components'),
                'public': path.resolve(__dirname, './public')
            }
        },
        devServer: {
            proxy: {
                '/yrrbw': {
                    target: 'http://127.0.0.1:3000'
                }
            }
        }
    }
}