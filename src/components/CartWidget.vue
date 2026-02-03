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

    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!localStore.isEmpty">

        <h3>Lista de compras</h3>

        <div v-for="(productsByName, type) in localStore.groupedByTypeAndName" :key="type">

          <h4 class="type-title">{{ type }}</h4>
          <ul class="items-in-cart">
            <!-- grouped viene el store CartItem (no toca el estore solo emite eventos-)  -->
            <CartItem v-for="(items, name) in productsByName" :key="name" :product="items[0]" :count="items.length"
              @updateCount="localStore.setItemCount(items[0], $event)" @clear="localStore.clearItemByNameAndType(name,type)" />
            Producto en local store
          </ul>
          </div>

          <p class="total">
            Total: <strong>{{ localStore.total }} $</strong>
          </p>
          <div class="actions">
            <AppButton @click="localStore.$reset()" id="clear-cart">Clear Cart
            </AppButton>

            <AppButton @click="localStore.checkout()" id="checkout">Checkout</AppButton>
          </div>
        </div>
        <!-- Uncomment and use condition to show when cart is empty -->
        <p v-else class="empty"><em>Lista de productos vacia</em></p>
    </AppModalOverlay>
  </div>
</template>

<style scoped>
/* ---------- ICONO CARRITO ---------- */
#carrito {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
}

#carrito .material-icons {
  font-size: 28px;
  color: #333;
}

/* ---------- CONTADOR ---------- */
.cart-count {
  position: absolute;
  top: 0;
  right: 0;

  background: #e63946;
  width: 18px;
  height: 18px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  font-weight: bold;
  color: white;
}

/* ---------- LISTA CARRITO ---------- */
.items-in-cart {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.items-in-cart li {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.items-in-cart li:last-child {
  border-bottom: none;
}

.items-in-cart li:nth-child(even) {
  background: #f7f7f7;
}

/* ---------- TOTAL ---------- */
.total {
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
}

/* ---------- BOTONES ---------- */
.actions {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
  justify-content: space-between;
}

#clear-cart {
  background-color: #e63946;
  color: white;
}

#clear-cart:hover {
  background-color: #d62828;
}

#checkout {
  background-color: #2a9d8f;
  color: white;
}

#checkout:hover {
  background-color: #21867a;
}

/* ---------- MENSAJE VACÍO ---------- */
.empty {

  text-align: center;
  font-style: italic;
  color: #666;
}
</style>