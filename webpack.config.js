const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './app/index_basics.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build'),
        inline: true
    }
}
