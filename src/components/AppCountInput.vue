<script setup>
defineProps({
//Aqui declara una propiedad que peude ser numero o string y si no tiene ningun valor que empiece por 0 
  modelValue: { type: [Number, String], default: 0 },
});

//Declara los eventos que este componente puede emitir 
//"update:modelValue" → necesario para que funcione v-model
//"input" (aunque aquí no se usa realmente, está declarado)
const emit = defineEmits(["update:modelValue", "input"]);

//Función que recibe un valor, Si el valor no esta vacio emite el evento, esto cuasa la actualización en el componente padre.
const updateValue = (value) => {
  emit("update:modelValue", value)
};

</script>
<template>
  <span>
  <!-- Al hacer click resta sino es un null y evita numeros (-) -->
    <button 
      @click="updateValue(modelValue > 0 ? modelValue - 1 : 0)">
      -
    </button>
    
      <!-- 1- :value="modelValue" → el input muestra el valor actual  -->
      <!-- 2 - type="number" → solo números  -->
      <!-- 3 - min="0" → no permite negativos -->
      <!-- 4 - @input Toma el valor del input y lo manda a updateValue + $event.target.value es string aunque sea número -->

    <input 
    :value="modelValue" 
    type="number" 
    min="0" 
    @input="updateValue($event.target.value)" />
    
     <!-- Al hacer click suma numeros (+) -->
    <button @click="updateValue(modelValue + 1)">
      +
    </button>
  </span>
</template>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-gray-500 w-10 text-center;
}

button {
  border: 1px solid gray;
}
</style>