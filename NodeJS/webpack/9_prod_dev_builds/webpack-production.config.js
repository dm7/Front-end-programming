var webPackStrip = require('strip-loader');
var prodConfig = require('./webpack.config.js');

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: webPackStrip.loader('console.log', 'perfLog')
}
prodConfig.module.loaders.push(stripLoader);

module.exports = prodConfig;