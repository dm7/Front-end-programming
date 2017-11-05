/*
 * 1)
 * webpack is typically a replacement for grunt & gulp.
 * Gulp is a kind of makefile approach, for build, with its own syntax, as start script.
 * 2)
 * On running such gulp scripts, it would spin up a webserver, launch a
 * bunch of watchers, amidst development, it will re-compile any es6 file
 * 3)
 * With webpack, we dont have such approach, instead run webpack-dev-server on
 * command prompt. As time goes by, we might add more parameters to the command
 * but webpack does not need that functionality because npm has that functionality
 * built into it.
 * We can do that 'scripts' section of 'package.json'
 * 4)
 * We no longer really user bower with webpack. Instead, we use npm.
 * 5)
 * To run the project, just run "npm start"
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
    scripts:{
        "start": "webpack-dev-server"  
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