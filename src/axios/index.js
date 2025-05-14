import { useUserStore } from '@/stores/user'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const { setToken } = store
const { getToken } = storeToRefs(store)

const axiosClient = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
})

axiosClient.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${getToken.value}`
	return config
})

axiosClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			setToken('')
			router.push({ name: 'login' })
		}
		throw error
	}
)

export default axiosClient
