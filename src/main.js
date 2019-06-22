import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './utils';
import '@/config/config';
import md5 from 'js-md5';
import api from "@/api/api";

// import 'antd/dist/antd.min.css'; //antd默认主题
import '@/assets/css/reset.css'; //bootstrap默认主题
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap默认主题
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);
Vue.prototype.$md5 = md5;
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')