/* config-overrides.js */

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   config = addBabelPlugin('transform-react-pug'); 
//   return config;
// }


const {
  override,
  addBabelPlugin,
  useEslintRc,
  useBabelRc,
  // disableEsLint
} = require("customize-cra");

module.exports = override(
  // disableEsLint(),
  useBabelRc(),
  useEslintRc(),
  // addBabelPlugin('transform-react-pug'),
  // addBabelPlugin('react-intl'),
);

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   console.log(config);
//   process.exit();
//   return config;
// }