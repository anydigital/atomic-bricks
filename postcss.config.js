const breakoutConfig = require('./node_modules/@anydigital/breakout-css/postcss.config.js');

module.exports = {
  plugins: {
    'postcss-import': {},
    ...breakoutConfig.plugins,
  }
}
