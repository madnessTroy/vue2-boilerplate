import { isAfter, isBefore } from '@/helpers/moment'
import moment from 'moment'

const state = {
    token: null,
    expiredIn: null,
    loggedIn: false,
    userInfo: {}
}

const mutations = {
    LOGIN_SUCCESS(state, { token, expiredIn }) {
        state.token = token.toString()
        state.expiredIn = +expiredIn
        state.loggedIn = true
    },

    LOGOUT(state) {
        state.token = null
        state.loggedIn = false
    }
}

const actions = {
    Login({ commit }, userInfo) {
        return commit('LOGIN_SUCCESS', userInfo)
    },

    Logout({ commit }, userInfo) {
        return commit('LOGOUT')
    }
}

const getters = {
    token: (state) => state.token,
    /*
    * True => token && loggedIn === true && current time is before expired time
    * */
    isLogged: (state) => state.token && state.loggedIn && isBefore(new Date(), state.expiredIn)
}

const authStore = {
    namespace: true,
    state,
    mutations,
    actions,
    getters
}

export default authStore
