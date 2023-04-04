export default [
    {
        path: '/calendar',
        name: 'calendar.index',
        component: () => import('@/views/CalendarView'),
        meta: {
            requiresAuth: true
        }
    }
]
