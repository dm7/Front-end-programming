/*
 * 1) Using CommonJS module system require() call.
 *
 * 2) If webpack.config.js is modified, then webpack-dev-server/--watch mode has to be restarted.
 *
 * 
 */
module.exports = {
    entry: ["./utils", "./app.js"],
    output:{
        filename: "bundle.js"
    }
};