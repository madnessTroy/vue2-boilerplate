import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardRoute from '@/router/routes/dashboardRoute'
import CalendarRoute from '@/router/routes/calendarRoute'

Vue.use(VueRouter)

/*
* Routes
* */
const routes = [
    ...DashboardRoute,
    ...CalendarRoute
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
