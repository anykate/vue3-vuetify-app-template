import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.getToken}`
    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            // const store = useUserStore()
            // store.setToken('')
            // const router = useRouter()
            // router.push({ name: 'login' })
        }
        throw error
    }
)

export default axiosClient
