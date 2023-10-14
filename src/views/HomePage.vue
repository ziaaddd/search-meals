<template>
  <div class="container py-4 my-5">
    <h1>Random meals</h1>
    <div class="spinner">
      <loading-spinner v-if="isLoading"></loading-spinner>
    </div>
    <p v-if="!meals.length && !isLoading" class="qoute">
      There are no meals yet, please enter any meals name to find your favorites
      meals
    </p>
    <meal-item :meals="meals"></meal-item>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const isLoading = ref();
const meals = ref([]);

onMounted(() => {
  loadMeals();
});

async function loadMeals() {
  isLoading.value = true;
  for (let i = 0; i < 25; i++) {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const responseData = await response.json();
    meals.value.push(responseData.meals[0]);
  }
  isLoading.value = false;
}
</script>

<style scoped>
.container h1 {
  color: orange;
}
.qoute {
  text-align: center;
  margin: 20px auto;
  font-size: 23px;
  color: rgba(88, 83, 83, 0.7);
}
.spinner {
  text-align: center;
  margin: 30px auto;
}
input {
  padding: 10px 15px;
  outline: none;
  font-size: 23px;
  width: 100%;
  border: 2px solid rgba(88, 83, 83, 0.7);
  color: rgba(0, 0, 0, 0.56);
}
input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
a {
  text-decoration: none;
  color: inherit;
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
</style>
