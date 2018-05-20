var webpack = require('webpack');
var path = require('path');
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

var config = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'index.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/png+xml' },
            { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/gif+xml' }

        ]
    }
};
module.exports = config;
