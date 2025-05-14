import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => ({
		token: 'd', // Dummy value here means login successful -> navigate to Home
	}),

	persist: {
		storage: localStorage,
		pick: ['token'],
	},

	getters: {
		getToken: (state) => state.token,
	},

	actions: {
		setToken(token) {
			this.token = token
		},
	},
})
