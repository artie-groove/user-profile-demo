const {
  override,
  addBabelPlugin,
  useEslintRc,
  useBabelRc,
} = require("customize-cra");

module.exports = override(
  useBabelRc(),
  useEslintRc(),
);
