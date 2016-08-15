'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  debug: true,

  entry: {
    styleguide: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './demo/Index'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'demo'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel?presets[]=es2015&presets[]=react'
        ],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
