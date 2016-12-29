const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        include: /components/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: 'jshint-loader',
      }
    ]
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js'
    }
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        jshint: {
         esversion: 6
        }
      }
    }),
  ]
};
