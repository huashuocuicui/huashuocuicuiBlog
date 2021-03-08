

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import md5 from 'js-md5';



export default ({ Vue, options, router }) => {
  Vue.prototype.$md5 = md5;
  Vue.use(Element);
};