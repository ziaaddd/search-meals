import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import MealsByIngredients from "./views/MealsByIngredients.vue";
import Ingredients from "./views/Ingredients.vue";
import MealsByLetters from "./views/MealsByLetters.vue";
import MealsByName from "./views/MealsByName.vue";
import MealsDetails from "./views/MealsDetails.vue";
import NotFound from "./views/NotFound.vue";
const routes = [
  { path: "/", redirect: "home" },
  { path: "/home", name: "home", component: HomePage },

  {
    path: "/name/:meal?", // ? make param is optional, user can write it or not
    name: "name",
    component: MealsByName,
  },
  {
    path: "/letters/:letter?",
    name: "letters",
    component: MealsByLetters,
  },

  {
    path: "/ingredients",
    name: "ingredients",
    component: Ingredients,
  },
  {
    path: "/byIngredients/:ingredient",
    name: "byIngredients",
    component: MealsByIngredients,
  },
  {
    path: "/mealDetails/:id",
    name: "mealDetails",
    component: MealsDetails,
  },

  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
