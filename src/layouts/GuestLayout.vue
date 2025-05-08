<script setup>
import { VApp, VContainer, VMain } from 'vuetify/components'
</script>

<template>
	<v-container>
		<v-app>
			<v-main>
				<router-view />
			</v-main>
		</v-app>
	</v-container>
</template>

<style scoped></style>
