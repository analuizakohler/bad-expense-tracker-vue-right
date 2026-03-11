import { ref, computed } from "vue";

export function useExpenses() {
  const expenses = ref([]);
  const filter = ref("Tudo");

  function addExpense(expense) {
    expenses.value.push({
      id: Date.now(),
      ...expense
    });
  }

  function removeExpense(id) {
    expenses.value = expenses.value.filter((expense) => expense.id !== id);
  }

  function clearExpenses() {
    expenses.value = [];
  }

  const filteredExpenses = computed(() => {
    if (filter.value === "Tudo") {
      return expenses.value;
    }

    return expenses.value.filter(
      (expense) => expense.category === filter.value
    );
  });

  const total = computed(() => {
    return filteredExpenses.value.reduce(
      (sum, expense) => sum + Number(expense.value),
      0
    );
  });

  return {
    expenses,
    filter,
    filteredExpenses,
    total,
    addExpense,
    removeExpense,
    clearExpenses
  };
}