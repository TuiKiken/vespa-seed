const path = require('path');

const src = path.join(
  process.cwd(),
  process.env.npm_package_config_src,
  'styles/application.css'
);
const dest = path.join(
  process.cwd(),
  process.env.npm_package_config_dest,
  'styles/application.css'
);

module.exports = {
  'input': src,
  'output': dest,
  'use': [
    'postcss-import',
    'postcss-cssnext'
  ],
  'autoprefixer': {
    'browsers': '> 5%'
  },
  'log': true
}
