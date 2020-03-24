const path = require('path');
const webpack = require('webpack');

module.exports = {
    // baseUrl: process.env.NODE_ENV == 'production' ? '/' :  '/',
    // transpileDependencies: [
    //   /\bvue-echarts\b/,
    //   /\bresize-detector\b/
    // ],
    configureWebpack: {
          resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components/'),
                Layout: path.resolve(__dirname, 'src/layouts/'),
                Views: path.resolve(__dirname, 'src/views/'),
                Assets: path.resolve(__dirname, 'src/assets'),
                Data: path.resolve(__dirname, 'src/data')
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        plugins: [
              //jquery plugin
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    }
}