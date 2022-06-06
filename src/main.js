import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      dsItems: window[document.getElementById('yugavto-multiselect').getAttribute('data')],
      mode: document.getElementById('yugavto-multiselect').getAttribute('mode'),
      placeholder: document.getElementById('yugavto-multiselect').getAttribute('placeholder')
    }
  },
  render: h => h(App),
}).$mount('#yugavto-multiselect')
