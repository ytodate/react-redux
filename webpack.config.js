'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.join(__dirname, './public/javascripts'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'source-map',
}
