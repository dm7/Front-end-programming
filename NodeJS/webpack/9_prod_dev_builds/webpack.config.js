/*
 * 1)
 * one manual approach to minify the bundle is to run "webpack -p" from command line.
 * 2)
 * Another approach is to install 'strip-loader'.
 * > npm install strip-loader --save-dev
 *
 * then use 'webpack-production.config.js' for production build and run
 * > webpack --config webpack-production.config.js -p
 *
 * 3) Instead of 'webpack-dev-server', we can also use 'http-server' by installing,
 * > npm install http-server -g
 * 
 * 
 * 
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