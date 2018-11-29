
const baseConfig = require('tools/.eslintrc');

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "react/forbid-prop-types": 1,
  }
};
