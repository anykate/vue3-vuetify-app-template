<script setup>
import { VApp, VContainer, VMain } from 'vuetify/components'
</script>

<template>
	<v-container>
		<v-app>
			<v-main>
				<router-link :to="{ name: 'Home' }">Home</router-link>
				|
				<router-link :to="{ name: 'About' }">About</router-link>

				<router-view />
			</v-main>
		</v-app>
	</v-container>
</template>

<style scoped>
.router-link-exact-active {
	color: green;
	text-decoration: none !important;
}
</style>
