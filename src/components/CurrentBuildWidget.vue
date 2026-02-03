<script setup>
import { ref } from 'vue'
import { useBuildStore } from '@/stores/useBuildStore'
import AppModalOverlay from './AppModalOverlay.vue'

const buildStore = useBuildStore()
const open = ref(false)
</script>

<template>
    <div class="build-widget">
        <h3>🖥️ Tu configuración</h3>

        <div v-if="buildStore.isEmpty">
            <em>No hay componentes seleccionados</em>
        </div>

        <ul v-else>
            <li v-for="(items, type) in buildStore.groupedByTypeAndName" :key="type">
                <strong>{{ type }}:</strong> {{ items[0].name }}
            </li>
        </ul>

        <button @click="open = true">
            Ver detalles
        </button>

        <AppModalOverlay :active="open" @close="open = false">
            <div class="modal-content">
                <h3>🧾 Detalle de la build</h3>

                <div v-for="(items, type) in buildStore.groupedByTypeAndName" :key="type" class="group">
                    <h4>{{ type }}</h4>

                    <ul>
                        <li v-for="item in items" :key="item.name">
                            {{ item.name }} - {{ item.price }} €
                        </li>
                    </ul>
                </div>

                <p class="total">
                    Total: {{ buildStore.total }} €
                </p>
            </div>
        </AppModalOverlay>

    </div>
</template>


<style scoped>
.build-widget {
    border: 2px solid #ddd;
    padding: 12px;
    border-radius: 8px;
    width: 300px;
    background: #f8f9fa;
}

.build-widget h3 {
    margin-bottom: 10px;
}

.build-widget ul {
    padding-left: 16px;
}

.build-widget button {
    margin-top: 10px;
    padding: 8px;
    cursor: pointer;
}

.modal-content h4 {
    margin-top: 12px;
}

.total {
    font-weight: bold;
    margin-top: 15px;
}
</style>
