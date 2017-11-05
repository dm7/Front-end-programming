/*
 * 
 * 1)
 * If we use ES6 modules, then webpack will convert to CommonJS modules virtually.
 * 2)
 * .babelrc is MUST
 * 
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