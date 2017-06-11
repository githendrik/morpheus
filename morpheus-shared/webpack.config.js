const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/SharedModule.ts',
    output: {
        filename: 'morpheus-shared.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] }) }
        ]
    },
    plugins: [new ExtractTextPlugin('styles.css')],
    externals: /^angular$/,
    devtool: 'source-map'
}