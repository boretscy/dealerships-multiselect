import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let apps = document.getElementsByName('yugavto-multiselect')
var sets = []

apps.forEach( function(a) {
    sets.push({
        dsItems: window[a.getAttribute('data')],
        mode: a.getAttribute('mode'),
        placeholder: a.getAttribute('placeholder'),
        instns: a.id
    })
})

sets.forEach( function(s) {
    new Vue({
        data() {
            return s
        },
        render: h => h(App),
    }).$mount('#'+s.instns)
})