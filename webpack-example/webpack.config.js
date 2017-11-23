const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin           = require("extract-text-webpack-plugin");
const path                        = require('path');
const webpack                     = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename : "[name].css",
    disable  : false
});

module.exports = {
    entry   : {
        'app' : './assets/js/app.js'
    },
    output  : {
        path     : path.resolve(__dirname + '/dist/'),
        filename : '[name].js'
    },
    module  : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test : /\.css$/,
                use  : [
                    { loader : 'css-loader' }
                ]
            },
            {
                test : /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
                use  : [
                    { loader : 'file-loader', options : { name : '[name]-[hash].[ext]' } }
                ]
            },
            {
                test : /\.scss/,
                use  : extractSass.extract({
                    use      : ['css-loader', 'sass-loader'],
                    fallback : 'style-loader'
                })
            }
        ]
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin(), // Disabled right now. Causes watch to take 6000ms instead of 100ms :(

        extractSass,
        new webpack.NamedModulesPlugin(),
        // Makes the __webpack_import__(173) turn into __webpack_import__("./path/to/my/file.js")
        // instead to make things easier to read.
        new FriendlyErrorsWebpackPlugin()
    ]
};

/*
 |--------------------------------------------------------------------------
 | Stats
 |--------------------------------------------------------------------------
 |
 | By default, Webpack spits a lot of information out to the terminal,
 | each you time you compile. Let's keep things a bit more minimal
 | and hide a few of those bits and pieces. Adjust as you wish.
 |
 */
module.exports.stats = {
    hash     : false,
    version  : false,
    timings  : false,
    children : false,
    errors   : false
};

/**
 * Hide deprecation warnings.
 *
 * Explanation from https://github.com/webpack/loader-utils/issues/56:
 * The deprecation warning is for webpack loader authors, because calling parseQuery with a non-string
 * value can have bad side-effects (see below). If you're a webpack user, you can set process.traceDeprecation = true
 * in your webpack.config.js to find out which loader is causing this deprecation warning. Please file an issue in
 * the loader's repository.
 */
process.noDeprecation = true;

module.exports.performance = { hints : false };