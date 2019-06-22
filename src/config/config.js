import Vue from 'vue';
const production = true; //是否为生产环境
const url = production ? 'http://39.98.167.238:8096' : 'http://192.168.1.9:8096'; //请求地址
console.log(url);
// Vue.prototype.$url = url;
export default {
  url //请求地址
  // static: `${url}/static/img`, //静态资源路径
}