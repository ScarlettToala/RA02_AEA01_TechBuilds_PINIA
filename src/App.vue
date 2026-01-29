<script setup>
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue'
import { useHardwareStore } from '@/stores/UseHardwareStore.js'
import  LocalStore  from '@/components/LocalStore.vue'
import { storeToRefs } from 'pinia'

import ProductCard from '@/components/ProductCard.vue'
import { useLocalStorage } from './stores/useLocalStorage'


const hardwareStore = useHardwareStore()


onMounted(() => {
  hardwareStore.loadHardware()
})

const localStore = useLocalStorage()

</script>

<template>
  <header>
  <NavBar/>
  <LocalStore/>
  </header>

  <div v-if="hardwareStore.loading">Cargando...</div>

  <div v-else class="products">
    <ProductCard
        v-for = "product in hardwareStore.hardware"
        :key = "product.name"
        :product = "product"
        @addToCart = localStore.add($event,product)
    /> 
  </div>

</template>

<style scoped>
*{
 background: rgb(240, 227, 117); 
}

header{
  margin-bottom: 13px;
  width: 99%;
}

.products{
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
</style>
