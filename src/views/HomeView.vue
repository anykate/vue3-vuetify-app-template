<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { increment, decrement } = store
const { getDoubleCount, getCount } = storeToRefs(store)
</script>

<template>
	<div>
		<h1>Home</h1>

		<!-- {{ getDoubleCount }} -->

		<v-row>
			<v-col
				cols="12"
				md="2"
			>
				<div class="d-flex justify-space-between align-center">
					<v-icon
						icon="mdi-plus-circle"
						@click="increment"
					></v-icon>

					{{ getCount }}

					<v-icon
						icon="mdi-minus-circle"
						@click="decrement"
					></v-icon>
				</div>
			</v-col>
			<v-col
				cols="12"
				md="10"
			>
				<v-card color="green pa-2"> This is an empty space </v-card>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
.bi {
	cursor: pointer;
}
</style>
