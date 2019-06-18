import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'antd/dist/antd.min.css'; // 默认主题

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')