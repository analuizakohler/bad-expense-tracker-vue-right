<script setup>

defineProps({
  expenses:Array,
  total:Number
})

const emit = defineEmits(["remove-expense"])

function formatCurrency(value){
  return new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
  }).format(value)
}

</script>

<template>

<div>

<h3>Lista de despesas</h3>

<div
v-if="expenses.length === 0"
>
Nenhuma despesa adicionada
</div>

<div
class="expense-card"
v-for="expense in expenses"
:key="expense.id"
>

<div>

<div class="expense-description">
{{ expense.description }}
</div>

<div class="expense-category">
{{ expense.category }}
</div>

</div>

<div class="expense-right">

<div class="expense-value">
{{ formatCurrency(expense.value) }}
</div>

<button
class="danger small"
@click="$emit('remove-expense', expense.id)"
>
X
</button>

</div>

</div>

<div class="total">
Total do dia: {{ formatCurrency(total) }}
</div>

</div>

</template>