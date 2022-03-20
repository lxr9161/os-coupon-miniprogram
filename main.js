import Vue from 'vue'
import App from './App'
import Request from './utils/request'

Vue.config.productionTip = false
Vue.use(Request)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
