<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add', 'clear']);

const title = ref('');
const value = ref('');
const category = ref('');

function submit() {
  if (!title.value.trim() || !value.value.trim()) {
    return;
  }

  emit('add', {
    title: title.value,
    value: value.value,
    category: category.value || 'other',
  });

  title.value = '';
  value.value = '';
  category.value = '';
}
</script>

<template>
  <div class="panel">
    <h2>Nova despesa</h2>

    <input v-model="title" placeholder="Descricao" />
    <input v-model="value" placeholder="Valor" />
    <input v-model="category" placeholder="Categoria" />

    <div class="row">
      <button @click="submit">Adicionar</button>
      <button @click="$emit('clear')">Limpar tudo</button>
    </div>
  </div>
</template>