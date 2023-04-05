export default [
    {
        path: '/chat',
        name: 'chat.index',
        component: () => import('@/views/ChatView'),
        meta: {
            requiresAuth: true
        }
    }
]
