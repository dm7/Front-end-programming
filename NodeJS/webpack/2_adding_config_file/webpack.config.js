/*
 * 1) Advantage of a webpack config file is,
 *      a) no need to provides at command line.
 *      b) Just need to run "webpack" on command line
 *
 * 2) web pack configuration file is a CommonJS module.
 *      This is why it has has "module.exports" syntax
 *
 *
 */

module.exports = {
    entry: "./app.js",
    output:{
        filename: "bundle.js"
    }
};