<script setup>
defineProps({
  item: Object
});

defineEmits(['remove']);
</script>

<template>
  <tr>
    <td>{{ item.title }}</td>
    <td>{{ item.category }}</td>
    <td>{{ item.value }}</td>
    <td>
      <button @click="$emit('remove', item.id)">X</button>
    </td>
  </tr>
</template>