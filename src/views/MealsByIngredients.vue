<template>
  <div class="container my-5 py-4">
    <h1>meals by ingredients</h1>
    <div class="spinner">
      <loading-spinner v-if="isLoading"></loading-spinner>
    </div>
    <p v-if="!meals.length && !isLoading" class="qoute">
      There are no meals yet, please enter any meals name to find your favorites
      meals
    </p>

    <!-- <pre>{{ meals }}</pre> -->
    <meal-item :meals="meals"></meal-item>
  </div>
</template>

<script setup>
import store from "../store/store.js";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const isLoading = ref(false);
const route = useRoute();

async function setMealsByIngredients() {
  isLoading.value = true;
  try {
    await store.dispatch("setMealsByIngredients", route.params.ingredient); //this will change meals
  } catch (error) {
    console.log(error);
  }
  isLoading.value = false;
  console.log(route.params.ingredient);
}

onMounted(() => {
  if (route.params.ingredient) {
    // is tgere a ingredient?
    setMealsByIngredients();
  }
});

const meals = computed(() => {
  return store.state.mealsByIngredients;
});

// watch(route, () => {
//   setMealsByIngredients();
// });
</script>

<style scoped>
.container h1 {
  text-transform: capitalize;
  color: orange;
  margin-bottom: 12px;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
}
a:hover {
  color: rgb(48, 48, 235);
}
.letters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  font-size: 22px;
  font-weight: 700;
  margin: 25px 0;
  color: rgba(0, 0, 0, 0.56);
}
.spinner {
  text-align: center;
  margin: 30px auto;
}
.qoute {
  text-align: center;
  margin: 20px auto;
  font-size: 23px;
  color: rgba(88, 83, 83, 0.7);
}
</style>
