const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './app/components'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map'
};
