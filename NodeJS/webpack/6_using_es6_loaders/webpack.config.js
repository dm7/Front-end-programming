/*
 *
 * 1) 
 * Here, we will lean, How to use loaders with webpack?
 * Using loaders, webpack learns new tricks.
 * 
 * By default, webpack at its core, knows, how to process javascript files interms of combining and minify them.
 * webpack does not really know, how to do much else.
 * Loader is the way for us to process files(if necessary) and transform them into something else.
 * Now, we are going to add two pieces functionality linting & transpiling, using loaders.
 * We will use two different loaders to do this.
 *
 * "Babel" will support ES6 and "jshint" will support linting
 * 
 * "jshint" will process each file looking for errors.
 * if it does, then it reports them out. "jshint" doesn't change the files.
 *
 * "Babel" will manipulate the file from ES6 to ES5.
 *
 * In this project, we only work with babel loaders, and then jshint in next project.
 * 
 * 2)
 * With regards to "npm install" command, We will use,
 *       --save-dev option for dev-dependencies entry in package.json
 *           --save option for dependencies entry in package.json
 *
 * 3)
 * In Babel 5, babel-preset-es2015 is not separate.
 * In Babel 6, babel-preset-es2015 is separate.
 * In Babel 6, we also need .babelrc file having,
 *              {
                   "presets" : ["es2015"]
                 }
 *                 
 * 4)
 * Each loader is represented as an object, as shown below,
 *     module: {
            loaders:[
                    // Here each laoder is an object with 3 keys
                    {
                        test: is a regular expression that tests, what kind of files to run through this loader
                        exclude: is a regular expression that excludes files within one or more folders.
                                        Ex: exclude: [/bower_components/, /node_modules/]
                        loader/loaders: are the names of one or more loaders.
                    }
            ]        
        }
    
 *
 * 5)
 * `babel-core` is the API. For v5 the `babel` package is
 * the CLI and depends on `babel-core`. For v6, the `babel-cli`
 * package is the CLI (the CLI bin command is still `babel` though)
 * and the `babel` package doesn't do anything.
 *
 * To make babel-core work, we need to add a loader declaration for
 * babel-loader to the loaders section of the configuration.
 *
 * 6)
 * 'resolve' key in loader object:
 * This key lets us specify, what kind of file types taht we can process
 * without specifically giving them the file extension. 
 * For ex - In app.js file, we have 'require('./login');', but the actual
 *          name of the file was 'login.js' in previous tutorial and now it is 'login.es6'
 * By default, webpack will process all files with a '.js' extension.
 * So, I dont have to add the extension in this syntax - 'require('./login');'
 *
 * This default behaviour can be overridden by 'resolve' key, as shown below,
 *
 * resolve: {
        extensions: ['', '.js', '.es6'] 
   }
 *
 * Now, if webpack encounters 'require('./login');', then webpack will search,
 *      a) login file
 *      b) and then login.js file
 *      c) and then login.es6 file
 *          
 */
module.exports = {
    entry: ["./utils", "./app.js"],
    output:{
        filename: "bundle.js"
    },
    module:{
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