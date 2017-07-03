const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./base.conf');
const StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  entry: {
    main: './example/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: /(\d*\.?\d+)rem/g,
              replacement: function (match, p1) {
                return parseInt(p1 * 50) + 'px';
              }
            }
          ]
        })
      }
    ]
  },
  vue: {
    postcss: [require('./rem2px')(50)]
  },
  plugins: [
    new StringReplacePlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' })
  ]
});
