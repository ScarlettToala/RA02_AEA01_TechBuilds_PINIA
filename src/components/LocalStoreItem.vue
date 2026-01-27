<script setup>
//Recibe los datos, cambias cantidad de productos o eliminar producto
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>

<template>
  <li>
    <span>{{ product.name }}</span>
    <span >
      <AppCountInput
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event)"
      />
      <span
        >${{ count * product.price }}</span
      >
      <!--Solo avisa-->
      <span @click="$emit('clear')">
        Icono de basura
      </span>
    </span>
  </li>
</template>
