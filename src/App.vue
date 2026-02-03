<script setup>
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue'
import { useHardwareStore } from '@/stores/UseHardwareStore.js'
import  CartStore  from '@/components/CartWidget.vue'
import { storeToRefs } from 'pinia'

import ProductCard from '@/components/ProductCard.vue'

import { useBuildStore } from './stores/useBuildStore.js'


const hardwareStore = useHardwareStore()


onMounted(() => {
  hardwareStore.loadHardware()
})

const cartStore = useBuildStore()

</script>

<template>
  <header>
  <NavBar/>
  <CartStore/>
  </header>

  <div v-if="hardwareStore.loading">Cargando...</div>

  <div v-else class="products">
    <ProductCard
        v-for = "product in hardwareStore.hardware"
        :key = "product.name"
        :product = "product"
        @addToCart ="cartStore.add($event, product)"
    /> 
  </div>

</template>

<style scoped>
*{
 background: rgb(239, 203, 84); 
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
