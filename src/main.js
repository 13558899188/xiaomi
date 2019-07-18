// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import { Lazyload } from 'mint-ui';
import store from './store';
//挂载到Vue的原型上，取别名为$axios
Vue.prototype.$axios = Axios;
Vue.use(Lazyload);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.afterEach((to,from,next)=>{
	window.scrollTo(0,0)
})
