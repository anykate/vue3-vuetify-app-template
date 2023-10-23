<script setup>
import { VApp, VContainer, VMain } from 'vuetify/components'
</script>

<template>
    <v-container>
        <v-app>
            <v-main>
                <router-link :to="{ name: 'home' }">Home</router-link> |
                <router-link :to="{ name: 'about' }">About</router-link>
                <router-view />
            </v-main>
        </v-app>
    </v-container>
</template>

<style scoped></style>
