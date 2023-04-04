import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthRoute from '@/router/routes/authRoute'
import DashboardRoute from '@/router/routes/dashboardRoute'
import CalendarRoute from '@/router/routes/calendarRoute'

import { checkAuth } from '@/utils/AuthServices'

Vue.use(VueRouter)

/*
* Routes
* */
const routes = [
    ...DashboardRoute,
    ...CalendarRoute,
    ...AuthRoute
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

checkAuth(router)

export default router
