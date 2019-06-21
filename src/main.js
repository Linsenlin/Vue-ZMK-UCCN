import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/utils';
import md5 from 'js-md5';


// import 'antd/dist/antd.min.css'; //antd默认主题
import '@/assets/css/reset.css'; //bootstrap默认主题
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap默认主题
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);

Vue.config.productionTip = false
Vue.prototype.$md5 = md5;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')