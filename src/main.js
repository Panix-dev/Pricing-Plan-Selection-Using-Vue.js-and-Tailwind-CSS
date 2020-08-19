import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

import '@/assets/css/main.css'

Vue.use(ToggleButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
