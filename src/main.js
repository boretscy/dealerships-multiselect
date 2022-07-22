import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

let apps = document.getElementsByName('yugavto-multiselect')
var sets = []

apps.forEach( function(a) {
    sets.push({
        api_data: a.getAttribute('api_data'),
        select_var: a.getAttribute('select_var'),
        parent_name: a.getAttribute('parent_name') || null,
        get_params: a.getAttribute('get_params') || '',
        parent_var: a.getAttribute('parent_var') || null,
        mode: a.getAttribute('mode'),
        name: a.getAttribute('name'),
        input_name: a.getAttribute('input_name'),
        placeholder: a.getAttribute('placeholder'),
        instns: a.id
    })
})

sets.forEach((s) => {
    window[s.select_var] = 'wer'
    new Vue({
        data() {
            return s
        },
        render: h => h(App),
    }).$mount('#'+s.instns)
})