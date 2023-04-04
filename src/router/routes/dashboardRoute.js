export default [
    {
        path: '/',
        name: 'dashboard.index',
        component: () => import('@/views/DashboardView'),
        meta: {
            requiresAuth: true
        }
    }
]
