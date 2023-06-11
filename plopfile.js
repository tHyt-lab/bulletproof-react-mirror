/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require("./generators/component/index");

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator("component", componentGenerator);
};
