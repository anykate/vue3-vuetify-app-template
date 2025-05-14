import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

export const useCounterStore = defineStore('counter', {
	state: () => ({ count: 0 }),

	getters: {
		getDoubleCount: (state) => state.count * 2,
		getCount: (state) => state.count,
	},

	actions: {
		increment() {
			let toast = useToast()

			this.count++

			toast.info('Counter incremented!', {
				timeout: 1000,
			})
		},

		decrement() {
			let toast = useToast()

			this.count--

			toast.info('Counter decremented!', {
				timeout: 1000,
			})
		},
	},
})
