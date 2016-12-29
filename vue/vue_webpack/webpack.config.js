'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack  = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'build.js'
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  watch: NODE_ENV == 'development',

  devtool: NODE_ENV == 'development' ? 'inline-source-map' : null,

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            'latest',
            'stage-0',
            ['env', {
              "targets": {
                "browsers": ['> 1%', 'last 2 versions', 'Firefox ESR']
              }
            }]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
}
