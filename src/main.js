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
import * as globalHelper from '@/helpers/globalHelper'
import * as momentHelper from '@/helpers/moment'

/*
* ------------- Styles -------------
* */
import '@/assets/styles/app.scss'

require('@/assets/bootstrap/bootstrap')

/*
* ------------- Plugins -------------
* */
require('@/plugins/socket')
/*
* ------------- Prototypes -------------
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
