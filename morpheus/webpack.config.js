const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'angular': path.resolve(path.join(__dirname, 'node_modules', 'angular'))
        }
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }, // Compile TS to JS
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // Handle css imports
            { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" } // Extract Source maps from libraries!
        ]
    },
    devtool: 'source-map'
}