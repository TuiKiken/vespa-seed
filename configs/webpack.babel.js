import path from 'path';

const src = path.join(
  process.cwd(),
  process.env.npm_package_config_src,
  'js'
);
const dest = path.join(
  process.cwd(),
  process.env.npm_package_config_dest,
  'js'
);

export default {
  context: src,
  entry: {
    application: './init.js'
  },
  output: {
    path: dest,
    filename: './[name].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'cacheDirectory': true
            }
          }
        ]
      }
    ]
  }
};
