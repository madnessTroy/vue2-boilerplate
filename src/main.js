import Vue from 'vue'
import App from './App.vue'

/*
* ------------- Utils -------------
* */
import router from '@/router'
import store from '@/store'
/*
* ------------- Scripts -------------
* */
import * as globalHelper from '@/helper/globalHelper'
import * as momentHelper from '@/helper/moment'

/*
* ------------- Styles -------------
* */
import '@/assets/styles/app.scss'

require('@/assets/bootstrap/bootstrap')

/*
* ------------- Vendor JS -------------
* */
Vue.prototype.$helper = globalHelper
Vue.prototype.$moment = momentHelper

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
