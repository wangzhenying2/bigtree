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
                '/msg': {
                    target: 'http://localhost:3000'
                },
                '/prods': {
                    target: 'http://localhost:3000'
                }
            }
        }
    }
}