<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useBuildStore } from "@/stores/useBuildStore.js"; //estado global 
import AppModalOverlay from "./AppModalOverlay.vue";
import AppButton from "@/components/AppButton.vue"

// data
const active = ref(false); //estado de abierto o cerrado
const localStore = useBuildStore(); //Concetar al store

</script>

<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span @click="active = true" id="carrito">
        <span class="material-icons">shopping_cart</span>
         <!-- Lee el estado global y reactivo automaticmanete. -->
        <div class="cart-count">{{ localStore.cantidad }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on, controla el modal desde fuera -->

    <AppModalOverlay 
    :active="active" 
    @close="active = false"
    >
      <div v-if="!localStore.isEmpty">
        <ul class="items-in-cart">
          <!-- grouped viene el store CartItem (no toca el estore solo emite eventos-)  -->
          <CartItem 
            v-for="(items, name) in localStore.grouper" 
            :key="name" 
            :product="items[0]"
            :count="items.length" 
            @updateCount="localStore.setItemCount(items[0], $event)"
            @clear="localStore.clearItem(name)"/>
            Producto en local store
        </ul>
        <div>
          Total: <strong>{{ localStore.total }}</strong>
        </div>
        <div>
          <AppButton 
            @click="localStore.$reset()"
          >Clear Cart
          </AppButton>
          <AppButton>Checkout</AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <div v-else><em>Lista de productos vacia</em></div>
    </AppModalOverlay>
  </div>
</template>

<style  scoped>

.cart-count{
  background: red;
  width: 15px;
  height: 15px;

  border-radius: 50%;   

  display: flex;      
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

#carrito{
  display: flex;
  flex-wrap:wrap;
  justify-content: right;
  cursor: pointer;
}


.items-in-cart {
  margin-bottom: 1rem;
}

.items-in-cart li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.items-in-cart li:nth-child(even) {
  background: #e5e5e5;
}

</style>