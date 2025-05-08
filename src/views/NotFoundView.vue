<script setup></script>

<template>
	<v-icon icon="mdi-backspace"></v-icon>
	<router-link
		:to="{ name: 'Home' }"
		class="ml-2"
	>
		Go back home
	</router-link>
	<div class="d-flex align-center justify-center custom-height">
		<h1>404 - Page Not Found</h1>
	</div>
</template>

<style scoped>
.custom-height {
	min-height: 95vh;
}
</style>
