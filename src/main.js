import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*
* ------------- Scripts -------------
* */
import * as globalHelper from '@/helper/globalHelper'
import * as momentHelper from '@/helper/moment'

/*
* ------------- Styles -------------
* */
import '@/assets/styles/app.scss'

/*
* ------------- Vendor JS -------------
* */
require('@/assets/bootstrap/bootstrap')

Vue.config.productionTip = false

Vue.prototype.$helper = globalHelper
Vue.prototype.$moment = momentHelper

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
