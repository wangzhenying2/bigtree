import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import './plugins/element.js'
import ajax from './plugins/ajax.js'

Vue.use(ajax)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
