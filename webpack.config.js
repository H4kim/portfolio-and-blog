const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./js/index.js",
    watch: true,
    output : {
        path: path.resolve("./dist/js"),
        filename : 'bundle.js',

    },

    module: {
        rules: [
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
          }
        ]
    }

    
}