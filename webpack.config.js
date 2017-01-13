var webpack = require('webpack');
var path = require('path');
var values = require('postcss-modules-values');
var Promise = require("bluebird");

// Configure
Promise.config({
    longStackTraces: true,
    warnings: true // note, run node with --trace-warnings to see full stack traces for warnings
})

var devServer = {
  inline: true,
  port: 3333,
  host: '127.0.0.1',
  contentBase: path.resolve(__dirname, './endpoint/'),
  publicPath: '/static/',
  proxy: {
    '/api': 'http://localhost:8080'
  }
};

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: devServer,
  entry: {
    app: [
      'whatwg-fetch',
      //'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './endpoint/static'),
    filename: 'index.js',
    publicPath: devServer.publicPath
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'sass-loader',
          'postcss-loader',
        ],
      }
    ]
  },
  postcss: [ 
    values
  ],
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, './src/_theme.scss') + '";'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
