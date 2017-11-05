/*
 *
 * 1) To avoid running html in with file:// protocol, we can use webpack-dev-server to run on http://
 * 2) To install webpack-dev-server, say "nom install webpack-dev-server -g" on command prompt
 * 3) On command prompt, say, "> webpack-dev-server".
 * 4) No need to reload the browser.
 * 5) URL "localhost:8080/webpack-dev-server" will render your html in a iframe
 * 6) To avoid it, use URL, "localhost:8080", but browser does not reload automatically.
 * 7) So, run "webpack-dev-server --inline" on command line, to avoid reload of browser.
 * 
 */
module.exports = {
    entry: "./app.js",
    output:{
        filename: "bundle.js"
    }
    /*watch: true*/ /*No need of watch*/
};