import App from '@/App.vue'
import router from '@/router'

import '@/assets/css/style.css'
import 'vue-toastification/dist/index.css'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'

createApp(App)
    .use(router)
    .use(Toast, {
        // Setting the global default position
        position: POSITION.BOTTOM_RIGHT,
    })
    .use(createVuetify())
    .use(createPinia())
    .mount('#app')
