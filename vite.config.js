import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
