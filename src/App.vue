<script setup>
import ExpenseHeader from './components/ExpenseHeader.vue';
import ExpenseForm from './components/ExpenseForm.vue';
import ExpenseList from './components/ExpenseList.vue';
import { useExpenses } from './composables/useExpenses';

const {
  filter,
  filtered,
  total,
  addExpense,
  removeExpense,
  clearAll
} = useExpenses();
</script>

<template>
  <div class="app">

    <ExpenseHeader
      @changeFilter="filter = $event"
    />

    <div class="layout">

      <ExpenseForm
        @add="addExpense"
        @clear="clearAll"
      />

      <ExpenseList
        :items="filtered"
        :total="total"
        @remove="removeExpense"
      />

    </div>

  </div>
</template>