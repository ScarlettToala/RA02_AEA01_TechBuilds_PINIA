<script setup>
import { onMounted } from 'vue'
import { useHardwareStore } from '@/stores/useHardwareStore'
import { useUserSessionStore } from '@/stores/useUserSessionStore'

const hardwareStore = useHardwareStore()

onMounted(() => {
  hardwareStore.loadHardware()
})

</script>

<template>
  <div v-if="hardwareStore.loading">Cargando...</div>

  <div v-else>
    <div v-for="item in hardwareStore.hardware" :key="item.id">
      {{ item.name }} - {{ item.price }} €
    </div>
  </div>
</template>

