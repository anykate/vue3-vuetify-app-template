import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/home',
        component: () => import('@/layouts/DefaultLayout.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/HomeView.vue'),
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
        meta: {
            requiresAuth: false,
        },
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

router.beforeEach((to, from, next) => {
    const store = useUserStore()

    if (to.meta.requiresAuth && !store.getToken) {
        next({ name: 'login', replace: true })
    } else if (!to.meta.requiresAuth && store.getToken) {
        if (to.name !== 'login') {
            next()
        } else {
            next({ name: 'home', replace: true })
        }
    } else {
        next()
    }
})

export default router
