import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const checkAuth = async (to, from, next) => {
	const store = useUserStore()
	const { getToken } = storeToRefs(store)

	if (!getToken.value && to.name !== 'Login') {
		next({ name: 'Login' })
	} else {
		next()
	}
}

const routes = [
	{
		path: '/',
		name: 'Default',
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('@/views/HomeView.vue'),
				beforeEnter: checkAuth,
			},
			{
				path: 'about',
				name: 'About',
				component: () => import('@/views/AboutView.vue'),
			},
		],
	},
	{
		path: '/',
		name: 'Guest',
		component: () => import('@/layouts/GuestLayout.vue'),
		children: [
			{
				path: 'login',
				name: 'Login',
				component: () => import('@/views/LoginView.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)',
		name: 'NotFound',
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
