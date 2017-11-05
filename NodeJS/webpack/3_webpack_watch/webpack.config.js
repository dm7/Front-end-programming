/*
 * In order to avoid constantly re-run "webpack" manually, after constant change in the file
 * 1) Use webpack "watch" mode
 *      Whenever the changes happen, it will immediately re-run the build and create your output file.
 *     There are two ways to do that:
 *      a) On command line say "webpack --watch"
 *      b) In config file add "watch: true"
 *  2) Advantage is, no need to re-run webpack command.
 *  3) But, you need to reload the browser. To avoid reload,  we use webpack-dev-server
 */

module.exports = {
    entry: "./app.js",
    output:{
        filename: "bundle.js"
    },
    watch: true
};