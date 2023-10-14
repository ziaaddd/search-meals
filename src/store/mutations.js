export default {
  loadSelectedMeals(state, payload) {
    state.selectedMeals = payload;
  },
  setMealsByLetters(state, payload) {
    state.mealsByLetters = payload;
  },
  setMealsByIngredients(state, payload) {
    state.mealsByIngredients = payload;
  },
};
