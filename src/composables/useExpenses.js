import { ref, computed } from 'vue';

export function useExpenses() {
  const expenses = ref([
    { id: 1, title: 'Cafe', value: 6, category: 'food' },
    { id: 2, title: 'Onibus', value: 4.5, category: 'transport' },
    { id: 3, title: 'Lanche', value: 12, category: 'food' },
  ]);

  const filter = ref('all');

  const filtered = computed(() => {
    if (filter.value === 'all') return expenses.value;
    return expenses.value.filter(
      (item) => item.category === filter.value
    );
  });

  const total = computed(() =>
    expenses.value.reduce(
      (sum, item) => sum + Number(item.value || 0),
      0
    )
  );

  function addExpense(expense) {
    expenses.value.push({
      id: Date.now(),
      ...expense,
    });
  }

  function removeExpense(id) {
    expenses.value = expenses.value.filter(
      (item) => item.id !== id
    );
  }

  function clearAll() {
    expenses.value = [];
  }

  return {
    expenses,
    filter,
    filtered,
    total,
    addExpense,
    removeExpense,
    clearAll,
  };
}