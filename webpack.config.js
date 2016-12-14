var webpack = require('webpack');
var path = require('path');

var devServer = {
  inline: true,
  port: 3333,
  host: '127.0.0.1',
  contentBase: path.resolve(__dirname, './build'),
  publicPath: '/static/',
};

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: devServer,
  entry: {
    app: [
      'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build/static'),
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
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
