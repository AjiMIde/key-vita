import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Data from './views/home/data/data.js'

Vue.config.productionTip = false
Vue.prototype.vitaData = Data

const windowResize = () => {
  if (window.document.body.clientWidth <= 500) {
    Vue.prototype.isMobile = true
  }
}
window.onresize = windowResize
windowResize()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
