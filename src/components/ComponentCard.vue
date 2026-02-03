<script setup>
defineProps({
    component: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(["add"])
</script>

<template>
    <div class="card">
        <h3>{{ component.name }}</h3>
        <p>Tipo: {{ component.type }}</p>
        <p>Precio: {{ component.price }} €</p>

        <button @click="emit('add', component)">
            Añadir
        </button>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 6px;
    width: 200px;
}
</style>
