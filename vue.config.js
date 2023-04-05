const path = require('path')

const timeCurrent = new Date().getTime()

module.exports = {
    publicPath: '/',
    outputDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'assets/' + process.env.VUE_APP_VERSION,
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '~': path.resolve(__dirname, 'node_modules'),
                '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
            }
        },
        output: {
            filename: () => '[name].' + timeCurrent + '.[hash:8].js',
            chunkFilename: '[name].' + timeCurrent + '.[hash:8].js'
        }
    },
    devServer: {
        host: 'localhost',
        port: process.env.VUE_APP_DEV_PUBLIC_PORT || '8080'
    }
}


