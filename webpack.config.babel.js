import path from 'path';
import webpack from 'webpack';

export default {
  context: path.join(__dirname, 'src/js'),
  entry: {
    application: './application.js'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: './[name].js'
  },

  watchOptions: {
    aggregateTimeout: 50
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      }
    ]
  }
};
