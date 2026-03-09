<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-expense","clear-expenses"]);

const description = ref("");
const value = ref("");
const category = ref("");

const categories = [
  "Comida",
  "Transporte",
  "Lazer",
  "Compras",
  "Outros"
];

function submitForm(){

  if(!description.value || !value.value || !category.value){
    alert("Preencha todos os campos");
    return;
  }

  emit("add-expense",{
    description: description.value,
    value: Number(value.value),
    category: category.value
  });

  description.value = "";
  value.value = "";
  category.value = "";
}
</script>

<template>

<div>

  <h3>Nova despesa</h3>

  <input
    v-model="description"
    placeholder="Descrição"
  />

  <input
    v-model="value"
    type="number"
    placeholder="Valor"
  />

  <select v-model="category">

    <option disabled value="">
      Escolha uma categoria
    </option>

    <option
      v-for="cat in categories"
      :key="cat"
      :value="cat"
    >
      {{ cat }}
    </option>

  </select>

  <button @click="submitForm">
    Adicionar
  </button>

  <button @click="$emit('clear-expenses')">
    Limpar tudo
  </button>

</div>

</template>