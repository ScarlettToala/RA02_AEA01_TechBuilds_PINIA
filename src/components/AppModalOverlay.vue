<script setup>
defineProps({
  active: Boolean,
});
defineEmits(["close"]);
</script>

<template>
  <div v-if="active">
    <!-- Fondo oscuro -->
    <div class="overlay" @click="$emit('close')"></div>

    <!-- Carrito -->
    <div class="modal">
      <button class="close" @click="$emit('close')">X</button>
      <slot />
    </div>
  </div>
</template>

<style scoped>

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 10;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background: white;
  padding: 16px;
  z-index: 11;
  overflow-y: auto;
}

.close {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
