import store from '@/store'

export default [
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('@/views/LoginView'),
        beforeEnter: (to, from, next) => {
            if (store.getters['isLogged']) return next('/')

            else return next()
        }
    }
]
