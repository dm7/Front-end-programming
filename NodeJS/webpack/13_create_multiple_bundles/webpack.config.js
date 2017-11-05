/*
 * 
 * 
 * What is the procedure to create three different bundlers?
 *
 * Multi-Page-App
 * When you compile a (real) multi page app, you want to
 * share common code between the pages. In fact this is
 * really easy with webpack: Just compile with multiple
 * entry points:
 *
 * module.exports = {
        entry: {
            p1: "./page1",
            p2: "./page2",
            p3: "./page3"
        },
        output: {
            filename: "[name].entry.chunk.js"
        }
    }
 *
 * This will generate multiple entry chunks: p1.entry.chunk.js,
 * p2.entry.chunk.js and p3.entry.chunk.js. But additional chunks
 * can be shared by them.
 *
 * If your entry chunks have some modules in common, there is a
 * cool plugin for this. The CommonsChunkPlugin identifies common
 * modules and put them into a commons chunk. You need to add two
 * script tags to your page, one for the commons chunk and one
 * for the entry chunk.
 *
 * var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
    module.exports = {
        entry: {
            p1: "./page1",
            p2: "./page2",
            p3: "./page3"
        },
        output: {
            filename: "[name].entry.chunk.js"
        },
        plugins: [
            new CommonsChunkPlugin("commons.chunk.js")
        ]
    }
 *
 * This will generate multiple entry chunks: p1.entry.chunk.js,
 * p2.entry.chunk.js and p3.entry.chunk.js, plus one commons.chunk.js.
 * First load commons.chunk.js and then one of the xx.entry.chunk.js.
 *
 * 
 * 
 * 
 *          
 */
var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output:{
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
    },
    plugins: [commonsPlugin],
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