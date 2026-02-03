<script setup>
import AppCountInput from "@/components/AppCountInput.vue";

//Recibe los datos, cambias cantidad de productos o eliminar producto
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>

<template>
  <li class="cart-item">
    <img :src="product.image" :alt="product.name" class="cart-item-image" />
    
    <div class="cart-item-info">
      <span class="cart-item-name">{{ product.name }}</span>

      <div class="cart-item-controls">
        <AppCountInput
          :model-value="count"
          @update:modelValue="$emit('updateCount', $event)"
        />
        <span class="cart-item-total">${{ count * product.price }}</span>
        <span class="cart-item-delete" @click="$emit('clear')">
          <span class="material-symbols-outlined">delete</span>
        </span>
      </div>
    </div>
  </li>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  gap: 10px;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 6px;
  background: #f5f5f5;
}

.cart-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.cart-item-name {
  font-weight: 500;
  font-size: 14px;
}

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item-total {
  font-weight: bold;
  color: #2c7be5;
  min-width: 50px;
  text-align: right;
}

.cart-item-delete {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.material-symbols-outlined {
  font-size: 20px;
  color: red;
  transition: transform 0.2s;
}

.material-symbols-outlined:hover {
  transform: scale(1.2);
}
</style>
