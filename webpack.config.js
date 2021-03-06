/**
 * Created by iano_ on 01/03/2016.
 */
var path = require('path');
var APP_DIR = path.resolve(__dirname);
module.exports = {
    context: __dirname,
    entry: './js/main.js',
    output: {
        path: __dirname + "/js/",
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: APP_DIR,
                exclude: 'node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    }
}