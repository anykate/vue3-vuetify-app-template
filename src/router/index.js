import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const checkAuth = async (to, from) => {
    const store = useUserStore()

    if (!store.getToken && to.name !== 'login') {
        return { name: 'login' }
    }
}

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/home',
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/HomeView.vue'),
                beforeEnter: checkAuth,
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/AboutView.vue'),
            },
        ],
    },
    {
        path: '/',
        name: 'guest',
        redirect: '/login',
        component: () => import('@/layouts/GuestLayout.vue'),
        children: [
            {
                path: '/login',
                name: 'login',
                component: () => import('@/views/LoginView.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: () => import('@/views/NotFoundView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: 'smooth' })
            }, 100)
        })
    },
})

export default router
