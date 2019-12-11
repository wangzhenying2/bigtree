const path = require('path')

module.exports = {
    lintOnSave: process.env.NODE_ENV === 'production',
    configureWebpack: {
        resolve: {
            alias: {
                '@c': path.resolve(__dirname, './src/components')
            }
        },
        devServer: {
            proxy: {
                '/msg': {
                    target: 'http://localhost:3000'
                }
            }
        }
    }
}