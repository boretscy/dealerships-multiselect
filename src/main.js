import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let apps = document.getElementsByName('yugavto-multiselect')

apps.forEach( function(a) {
  
    new Vue({
        data() {
            return {
                dsItems: window[a.getAttribute('data')],
                mode: a.getAttribute('mode'),
                placeholder: a.getAttribute('placeholder')
            }
        },
        render: h => h(App),
    }).$mount('#'+a.id)
})
