/* Automatically generated by './build/bin/build-entry.js' */

import Button from './packages/button/index.js';
import Badge from './packages/badge/index.js';

const components = [
  Button,
  Badge
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '2.4.1',
  install,
  Button,
  Badge
};

module.exports.default = module.exports;