// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { store } from './store/store'

// Vue.use(window.VueCharts)
Vue.use(VueChartkick, {adapter: Chart})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
