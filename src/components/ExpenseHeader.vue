<template>
  <div class="header">
    <h1>Controle de Gastos Rápido</h1>

    <div class="filters">
      <button @click="$emit('changeFilter', 'all')">Tudo</button>
      <button @click="$emit('changeFilter', 'food')">Comida</button>
      <button @click="$emit('changeFilter', 'transport')">Transporte</button>
      <button @click="$emit('changeFilter', 'other')">Outros</button>
    </div>
  </div>
</template>