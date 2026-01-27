<script setup>
// Controla desde fuera reutilizable
defineProps({
  active: { type: Boolean, default: false },
});

defineEmits(["close"]);

</script>

<template>
<!--El padre manda-->
  <div v-if="active" >
    <div @click="$emit('close')"></div>
    <div>
      <span class="close" @click="$emit('close')">
        Icono Cerrar ventana
      </span>
      <!--Contenido dinamico-->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="pcss" scoped>
.close{
  @apply absolute top-2 right-2;
}
.modal-overlay-bg{
  @apply fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-80;
}
.modal-overlay-content{
  @apply fixed bg-white p-10 w-4/5 rounded;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 800px){
  .modal-overlay-content{
    width:600px !important;
  }
}
</style>
