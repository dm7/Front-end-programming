/*
 * 
 * 1) 'path' modules can be used to resolve the required files in webpack config
 * 2) 'context: path.resolve('js')' will guide, finding the 'js' folder files given in 'entry' key.
 * 3) 'path: path.resolve('build/js/')' in 'output' key is to guide, placing the 'bundle.js' file in 'build/js/'.
 * 4) "publicPath: '/public/assets/js/'" in output key, that bundle.js will be served up from
 *      the webserver like webpack-dev-server.
 * 5) devServer:{
        contentBase: 'public'
      } tells that index.html is available in 'public' folder within root.
 * 
 * 
 *          
 */
var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./app.js"],
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