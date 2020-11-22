import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Data from './views/home/data/data.json'

Vue.config.productionTip = false
Vue.prototype.vitaData = Data

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
