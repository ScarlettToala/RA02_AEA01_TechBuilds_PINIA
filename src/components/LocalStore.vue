<script setup>
// imports
import { ref } from "vue";
import LocalStoreItem from "./LocalStoreItem.vue";
import { useLocalStorage } from "@/stores/useLocalStorage"; //estado global 
import AppModalOverlay from "./AppModalOverlay.vue";
import AppButton from "@/components/AppButton.vue"
// data
const active = ref(false); //estado de abierto o cerrado
const localStore = useLocalStorage() //Concetar al store

</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span @click="active = true">
      Icono de compra
      
      <!-- Lee el estado global y reactivo automaticmanete. -->
      <div class="cart-count">{{ localStore.count }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on, controla el modal desde fuera -->
    
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!localStore.isEmpty">
        <ul class="items-in-cart">
        
        <!-- grouped viene el store CartItem (no toca el estore solo emite eventos-)  -->
       <LocalStoreItem v-for="(items, name) in localStore.grouped" 
          :key="name" 
          :product="items[0]" 
          :count="items.length"
          @updateCount="localStore.setItemCount(items[0], $event)" 
          @clear="localStore.clearItem(name)" 
          /> 
            Producto en local store
        </ul>
        <div>
          Total: <strong>{{ localStore.total }}</strong>
        </div>
        <div>
          <AppButton  @click="localStore.$reset()">Clear Cart</AppButton>
          <AppButton >Checkout</AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <div v-else><em>Lista de productos vacia</em></div>
    </AppModalOverlay>
  </div>
</template>

<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>