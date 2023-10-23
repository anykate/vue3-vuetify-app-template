import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0 }),

    getters: {
        doubleCount: (state) => state.count * 2,
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
