<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
    <div>
        <h1>Home</h1>

        <!-- {{ store.doubleCount }} -->

        <v-row>
            <v-col
                cols="12"
                md="2"
            >
                <div class="d-flex justify-space-between align-center">
                    <v-icon
                        icon="mdi-plus-circle"
                        @click="store.increment"
                    ></v-icon>

                    {{ store.count }}

                    <v-icon
                        icon="mdi-minus-circle"
                        @click="store.decrement"
                    ></v-icon>
                </div>
            </v-col>
            <v-col>
                <v-card color="green"> This is an empty space </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.bi {
    cursor: pointer;
}
</style>
