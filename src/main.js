import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      dsItems: window.DEALERSHIPS
    }
  },
  render: h => h(App),
}).$mount('#dealerships-multiselect')
