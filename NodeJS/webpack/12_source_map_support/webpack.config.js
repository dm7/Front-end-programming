/*
 * 
 * 
 * How to add source map support to webpack?
 *
 * 1) Source map support is built into webpack.
 * 2) For manual build, 'webpack -d' will generate the source maps for javascript files.
 * 3) 'webpack-dev-server -d' will generate the source maps for javascript files.
 * 4) Despite minification with 'webpack-dev-server -d -p', we can view the source files in runtime.
 * 
 * 
 *          
 */
var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./app"],
    output:{
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    devServer:{
        contentBase: 'public'
    },
    module:{
        preLoader:[
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders:[
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    resolve: {
             extensions: ['', '.js', '.es6'] 
    }
};