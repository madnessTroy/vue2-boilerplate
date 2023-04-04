import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexPersist from 'vuex-persist'
import authStore from '@/store/modules/authStore'
import getters from '@/store/getters'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
    key: 'auth',
    storage: window.localStorage,
    modules: ['authStore']
})

const store = new Store({
    getters,
    plugins: [vuexLocalStorage.plugin],
    modules: { authStore }
})

export default store
