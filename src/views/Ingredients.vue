<template>
  <!-- <pre>{{ ingredients }}</pre> -->
  <div class="template">
    <div class="container py-5">
      <h1 class="my-4">Ingredients</h1>
      <div class="my-4">
        <input
          type="text"
          placeholder="search  for Ingredients "
          v-model="keyword"
        />
      </div>
      <p v-if="!ingredients.length && !isLoading" class="qoute">
        There are no meals yet, please enter any meals name to find your
        favorites meals
      </p>
      <div class="spinner">
        <loading-spinner v-if="isLoading"></loading-spinner>
      </div>
      <!-- will go to an bage display all meals contain this ingredien -->
      <router-link
        v-for="ingredient of filteredIngredients"
        :key="ingredient.idIngredient"
        :to="{
          name: 'byIngredients',
          params: { ingredient: ingredient.strIngredient },
        }"
      >
        <div class="content my-3 py-3 px-4">
          <h2>{{ ingredient.strIngredient }}</h2>
          <p>{{ ingredient.strDescription }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

const ingredients = ref([]);
const keyword = ref("");
const isLoading = ref(false);

const filteredIngredients = computed(() => {
  //   if (!filteredIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

async function loadIngredients() {
  isLoading.value = true;
  const response =
    await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list
`);
  const responseData = await response.json();

  ingredients.value = responseData.meals;
  isLoading.value = false;
}

onMounted(() => {
  loadIngredients();
});
</script>

<style scoped>
.template {
  background-color: #ddddddab;
  min-height: 100vh;
}
.container h1 {
  color: orange;
}
input {
  padding: 10px 15px;
  outline: none;
  font-size: 23px;
  width: 100%;
  border: 2px solid rgba(88, 83, 83, 0.7);
  color: rgba(0, 0, 0, 0.56);
  transition: 0.3s;
}
input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
input:focus {
  border: 2px solid orange;
}
.content {
  background-color: white;
  transition: 0.3s;
}
.content:hover {
  transform: scale(1.02);
}
.content h2 {
  padding-bottom: 8px;
  border-bottom: 1px solid orange;
}
.content p {
  color: rgb(104, 100, 100);
  margin: 15px 0;
  line-height: 30px;
}
a {
  text-decoration: none;
  color: black;
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
