<script setup>
import ExpenseItem from './ExpenseItem.vue';

defineProps({
  items: Array,
  total: Number
});

defineEmits(['remove']);
</script>

<template>
  <div class="panel">
    <h2>Lista do dia</h2>

    <table>
      <thead>
        <tr>
          <th>Descricao</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <ExpenseItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @remove="$emit('remove', $event)"
        />
      </tbody>
    </table>

    <div class="summary">
      Total do dia: {{ total }}
    </div>
  </div>
</template>