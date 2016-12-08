const path = require('path');

const dest = path.join(
  process.cwd(),
  process.env.npm_package_config_dest
);

module.exports = {
  'server': dest
};
