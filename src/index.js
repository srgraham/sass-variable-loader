import loaderUtils from 'loader-utils';
import getVariables from './get-variables';
import parseVariables from './parse-variables';

module.exports = function sassVariableLoader(content) {
  this.cacheable(); // Flag loader as cacheable
  // const opts = Object.assign({}, loaderUtils.getOptions(this));
  const variables = getVariables(content);

  return `module.exports = ${JSON.stringify(variables)};`;
};
