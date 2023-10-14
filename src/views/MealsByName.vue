<template>
  <div class="body">
    <div class="container py-5">
      <h1>search meals by its name</h1>
      <div class="row">
        <div class="col-12 d-flex flex-column justify-content-between">
          <div>
            <input
              type="text"
              placeholder="search  for meals "
              v-model="selectedMeal"
              @change="loadSelectedMeals()"
            />
          </div>
        </div>
      </div>
      <div class="spinner">
        <loading-spinner v-if="isLoading"></loading-spinner>
      </div>
      <!-- <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p> -->
      <p v-if="!findMeals && !isLoading" class="qoute">
        There are no meals yet, please enter any meals name to find your
        favorites meals
      </p>
      <meal-item :meals="meals"></meal-item>
    </div>
  </div>
</template>

<script setup>
import store from '../store/store';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const selectedMeal = ref('');
const isLoading = ref(false);
// const errorMessage = ref("");
const route = useRoute();

const meals = computed(() => {
  return store.state.selectedMeals;
});
const findMeals = computed(() => {
  if (store.state.selectedMeals) {
    return store.state.selectedMeals.length > 0;
  } else {
    return false;
  }
});
async function loadSelectedMeals() {
  isLoading.value = true;
  try {
    if (selectedMeal.value) {
      await store.dispatch('loadSelectedMeals', selectedMeal.value);
    } else {
      store.commit('loadSelectedMeals', []);
    }
  } catch (error) {
    // errorMessage.value = error;
    console.log(error);
  }
  isLoading.value = false;
}
onMounted(() => {
  //this for if user sereach about an meal in url
  selectedMeal.value = route.params.meal;
  if (selectedMeal.value) {
    loadSelectedMeals();
  }
});
</script>

<style scoped>
/* .body {
  min-height: 100vh;
} */
.container h1 {
  text-transform: capitalize;
  color: orange;
  margin-bottom: 12px;
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
.spinner {
  text-align: center;
  margin: 30px auto;
}
.qoute,
.error {
  text-align: center;
  margin: 20px auto;
  font-size: 23px;
  color: rgba(88, 83, 83, 0.7);
}
.error {
  color: red;
}
</style>
