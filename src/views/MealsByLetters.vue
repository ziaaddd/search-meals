<template>
  <div class="container my-5 py-4">
    <h1>meals by letters</h1>
    <div class="letters">
      <router-link
        :to="{ name: 'letters', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
    <div class="spinner">
      <loading-spinner v-if="isLoading"></loading-spinner>
    </div>
    <p v-if="!meals.length && !isLoading" class="qoute">
      There are no meals yet, please enter any meals name to find your favorites
      meals
    </p>

    <meal-item :meals="meals"></meal-item>
    <!-- <pre>{{ meals }}</pre> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store/store.js";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPRSTVWY".split("");
const isLoading = ref(false);
// const letter = ref("");

const meals = computed(() => {
  return store.state.mealsByLetters;
});

async function setMealsByLetters() {
  isLoading.value = true;
  try {
    await store.dispatch("setMealsByLetters", route.params.letter);
  } catch (error) {
    // errorMessage.value = error;
    console.log(error);
  }
  isLoading.value = false;
}

onMounted(() => {
  if (route.params.letter) {
    // is there a letter?
    setMealsByLetters();
  }
});

// const findMeals = computed(() => {
//   if (store.state.mealsByLetters) {
//     return store.state.mealsByLetters.length > 0;
//   }
// });

watch(route, () => {
  setMealsByLetters();
});
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
  color: orange;
  transform: scale(2);
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
