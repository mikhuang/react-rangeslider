'use strict'

var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    library: 'ReactRangeslider',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
}
