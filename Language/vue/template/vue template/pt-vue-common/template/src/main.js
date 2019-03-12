import './style/global.scss'

{{#if promise_polyfill}}
// 引入promise垫片
import 'es6-promise/auto'
{{/if}}
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
