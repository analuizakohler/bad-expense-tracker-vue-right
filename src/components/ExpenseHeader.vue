<script setup>

const emit = defineEmits(["set-filter"]);

const filters = [
  "Tudo",
  "Comida",
  "Transporte",
  "Lazer",
  "Compras",
  "Outros"
];

</script>

<template>

<div class="filters">

  <button
    v-for="f in filters"
    :key="f"
    @click="emit('set-filter', f)"
  >
    {{ f }}
  </button>

</div>

</template>