<template>
  <button type="button" class="btn">
  <!-- En la etiqueta slot va lo que me pongan entre las etiquetas” -->
    <slot></slot>
  </button>
</template>

<style scoped>
/* ---------- BOTÓN BASE ---------- */
.btn {
  padding: 10px 16px;
  border-radius: 6px;
  border: none;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  background: #457b9d;
  color: white;

  transition: all 0.2s ease;
}

/* ---------- HOVER ---------- */
.btn:hover {
  background: #1d3557;
}

/* ---------- CLICK ---------- */
.btn:active {
  transform: scale(0.96);
}

/* ---------- DISABLED ---------- */
.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>