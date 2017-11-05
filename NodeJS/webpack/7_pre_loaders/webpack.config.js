/*
 * 1)
 * In this project, we will add support for jshint.
 *
 * 2)
 * jshint is not configured as loader but as pre-loader.
 * 
 *          
 */
module.exports = {
    entry: ["./utils", "./app.js"],
    output:{
        filename: "bundle.js"
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