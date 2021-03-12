import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { Input } from 'ant-design-vue'
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
