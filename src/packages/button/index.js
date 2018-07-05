import LnButton from './src/button';

/* istanbul ignore next */
LnButton.install = function(Vue) {
  Vue.component(LnButton.name, LnButton);
};

export default LnButton;
