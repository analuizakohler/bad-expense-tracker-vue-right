<script setup>

import ExpenseHeader from "./components/ExpenseHeader.vue"
import ExpenseForm from "./components/ExpenseForm.vue"
import ExpenseList from "./components/ExpenseList.vue"

import { useExpenses } from "./composables/useExpenses"

const {
  filter,
  filteredExpenses,
  total,
  addExpense,
  removeExpense,
  clearExpenses
} = useExpenses()

function setFilter(value){
  filter.value = value
}

</script>

<template>

<div class="container">

<h1 class="title">
Controle de Gastos
</h1>

<ExpenseHeader
:filter="filter"
@set-filter="setFilter"
/>

<div class="content">

<div class="card">

<ExpenseForm
@add-expense="addExpense"
@clear-expenses="clearExpenses"
/>

</div>

<div class="card">

<ExpenseList
:expenses="filteredExpenses"
:total="total"
@remove-expense="removeExpense"
/>

</div>

</div>

</div>

</template>