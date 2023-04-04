import store from '@/store'

export const gotoLogin = (to, next) => {
    return next({
        name: 'auth.login',
        query: {
            redirect: to ? to.fullPath : null
        }
    })
}

export const gotoDashboard = (to, next) => {
    return next({
        name: 'dashboard.index'
    })
}

export const authLogged = () => store.getters['isLogged']

export const checkAuth = (routes) => {
    return routes.beforeEach(async (to, from, next) => {
        if (to.meta && Object.prototype.hasOwnProperty.call(to.meta, 'requiresAuth')) {
            if (to.meta.requiresAuth) {
                if (!authLogged()) {
                    await store.dispatch('Logout')
                    return gotoLogin(to, next)
                }
                return next()
            }
        }
        return next()
    })
}
