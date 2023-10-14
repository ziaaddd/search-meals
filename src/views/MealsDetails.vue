<template>
  <!-- this to if you want to see all key in meal object -->
  <!-- <pre> {{ meal }}</pre> -->

  <div class="container py-5 my-5">
    <div>
      <loading-spinner v-if="isLoading" class="spinner"></loading-spinner>
    </div>
    <h1 class="tittle">{{ meal.strMeal }}</h1>
    <div class="row">
      <div class="col-12 image">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      </div>
      <div class="col-4 info">
        <span>Category:</span> {{ meal.strCategory }}
      </div>
      <div class="col-4 info"><span>Area: </span>{{ meal.strArea }}</div>
      <div class="col-4 info"><span>Tags: </span>{{ meal.strTags }}</div>
      <div class="col-12">
        <p class="description">{{ meal.strInstructions }}</p>
      </div>
      <div class="col-6 cuts">
        <h2>Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <!-- The `v-if` directive checks if the `meal` object has a property called `strIngredient${ind + 1}`(as there are empty Ingredient). If it does, the directive return the list item. -->
            <li v-if="meal[`strIngredient${ind + 1}`]">
              <!-- The `ind + 1` expression is used to get the index of the ingredient, starting from 1. -->
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="col-6 cuts">
        <h2>Measure</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <!-- The `v-if` directive checks if the `meal` object has a property called `strIngredient${ind + 1}`(as there are empty Ingredient). If it does, the directive return the list item. -->
            <!-- all this because meal object dont have an array contaion all Measures or ingerdients  -->
            <li v-if="meal[`strMeasure${ind + 1}`]">
              <!-- The `ind + 1` expression is used to get the index of the ingredient, starting from 1. -->
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div
        class="col-12 links d-flex justify-content-between align-items-center"
      >
        <a :href="meal.strYoutube" target="_blank" class="youtube"
          ><i class="fa-brands fa-youtube fa-xl"></i
        ></a>
        <a :href="meal.strSource" target="_blank" class="source"
          >View Original Source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  const responce = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
  );
  const responceData = await responce.json();

  meal.value = responceData.meals[0] || {};
  isLoading.value = false;
});
</script>

<style scoped>
.tittle {
  text-align: center;
  color: rgba(0, 0, 0, 0.644);
}
.image {
  text-align: center;
  margin: 20px 10px;
}
.image img {
  border-radius: 10%;
  width: 50%;
}
.info {
  text-align: center;
}
.info span {
  font-weight: 800;
  font-size: 23px;
}
.description {
  margin: 50px auto;
  text-align: center;
  color: rgba(0, 0, 0, 0.644);
}

.cuts {
  text-align: center;
}
.cuts h2 {
  margin-bottom: 10px;
  border: 2px solid #ddd;
  background-color: rgb(90, 90, 207);
  color: white;
}
ul {
  list-style: none;
}
ul li {
  margin: 3px;
  padding: 3px 0;
  border-bottom: 1px solid #d7d3d3;
}
a {
  text-decoration: none;
  display: inline-block;
  margin: 30px 20px;
}
.youtube i {
  color: #ff0000;
  padding: 10px 10px;
  transition: 0.3s;
  cursor: pointer;
  font-size: 40px;
}
.youtube i:hover {
  color: #ff000092;
}
.source {
  color: white;
  padding: 7px 10px;
  transition: 0.3s;
  cursor: pointer;
  background-color: rgb(90, 90, 207);
  border-radius: 10px;
  transition: 0.3s;
}
.source:hover {
  background-color: rgba(90, 90, 207, 0.76);
}
.spinner {
  text-align: center;
  margin: 30px auto;
}
</style>
