var webpack = require('webpack');
var path = require('path');
var Promise = require("bluebird");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

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
  proxy: {
    '/api': 'http://localhost:8080'
  }
};

const config = {
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
    path: path.resolve(__dirname, './endpoint'),
    filename: 'index.js',
    publicPath: devServer.publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          } 
        }]
      },
      {
        test:  /\.(css|scss)$/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]' },
          { loader: 'sass-loader'},
          { loader: 'postcss-loader'}
        ],
      },
      
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
            require('postcss-modules-values')
          ],
          sassLoader: {
            data: '@import "' + path.resolve(__dirname, './src/_theme.scss') + '";'
          }
          // ...other configs that used to directly on `modules.exports`
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      // template: 'node_modules/html-webpack-template/index.ejs'
      appMountId: 'app',
      baseHref: prod ? '/54fz/test/' : '/',
      meta: {
        description: 'A better default template for html-webpack-plugin.'
      },
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet',
        'https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet'
      ],
      title: '54-ФЗ: предприниматели переходят на онлайн-кассы',
      hash: true
    })
  ],
}

if (prod) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {screw_ie8: true}}))
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config;
