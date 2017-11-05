/*
 * 1)
 * For css loading, we need two loaders,
 * > npm install css-loader style-loader --savedev
 * 2)
 * Add a loader for css file processing in this webpack config.
 * 3)
 * In index.html, we are not linking css, there fore, webpack, does not
 * have any idea about app.css/bootstrap.css, therefore webpack is not
 * going to include them in the project. We've got to tell that, we want
 * those css files. Approach is to either tell through 'entry' key of webpack
 * config or include 'require('*.css')' syntax in required JS file.
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
            }
        ],
    },
    resolve: {
             extensions: ['', '.js', '.es6'] 
    }
};