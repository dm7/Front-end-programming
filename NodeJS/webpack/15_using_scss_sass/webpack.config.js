/*
 * 1)
 * For sass support, we need the below loader,
 * > npm install sass-loader --save-dev
 *
 * 
 * 
 *          
 */
var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./app"],
    output:{
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    devServer:{
        contentBase: 'public'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"/* two loaders separated by !, these loaders work together.*/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ],
    },
    resolve: {
             extensions: ['', '.js', '.es6'] 
    }
};