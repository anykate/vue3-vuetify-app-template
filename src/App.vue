<script setup></script>

<template>
	<div>
		<router-view v-slot="{ Component, route }">
			<Transition
				name="custom-classes"
				enter-active-class="animate__animated animate__fadeIn"
				leave-active-class="animate__animated animate__fadeOut"
				:duration="{ enter: 4000, leave: 10 }"
			>
				<div :key="route.name">
					<component :is="Component" />
				</div>
			</Transition>
		</router-view>
	</div>
</template>

<style></style>
