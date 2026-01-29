<script setup>
defineProps({
  modelValue: { type: [Number, String], default: 0 },
});

const emit = defineEmits(["update:modelValue", "input"]);

const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="counter">
    <button class="counter-btn" @click="updateValue(modelValue > 0 ? modelValue - 1 : 0)">-</button>
    
    <input 
      class="counter-input"
      :value="modelValue" 
      type="number" 
      min="0" 
      @input="updateValue($event.target.value)" 
    />
    
    <button class="counter-btn" @click="updateValue(modelValue + 1)">+</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 5px;
}

.counter-input {
  width: 50px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 4px 6px;
  outline: none;
}

.counter-input:focus {
  border-color: #2c7be5;
  box-shadow: 0 0 0 2px rgba(44, 123, 229, 0.2);
}

.counter-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f5f5f5;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.counter-btn:hover {
  background-color: #2c7be5;
  color: white;
  border-color: #2c7be5;
}
</style>
