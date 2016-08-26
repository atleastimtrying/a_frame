var DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = {
  entry: './src/entry.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ]
  },
  plugins: [
    new DashboardPlugin()
  ]
};
