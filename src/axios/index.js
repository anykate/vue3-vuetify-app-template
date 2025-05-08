import { useUserStore } from '@/stores/user'
import axios from 'axios'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const axiosClient = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
})

axiosClient.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${store.getToken}`
	return config
})

axiosClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			store.setToken('')
			router.push({ name: 'login' })
		}
		throw error
	}
)

export default axiosClient
