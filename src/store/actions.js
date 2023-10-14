export default {
  async loadSelectedMeals(context, payload) {
    const responce = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${payload}` // this api fetch meals by its name
    );
    const responceData = await responce.json();
    if (!responce.ok) {
      const error =
        responceData.message || "somthing error in catching dada , try again";
      throw error;
    }
    context.commit("loadSelectedMeals", responceData.meals);
  },
  async setMealsByLetters(context, letter) {
    const responce = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}` // this api fetch meals by  letter
    );
    const responceData = await responce.json();
    if (!responce.ok) {
      const error =
        responceData.message || "somthing error in catching dada , try again";
      throw error;
    }
    context.commit("setMealsByLetters", responceData.meals);
  },
  async setMealsByIngredients(context, ing) {
    const responce = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}` // this api fetch meals contain ing (Ingredients)
    );
    const responceData = await responce.json();
    if (!responce.ok) {
      const error =
        responceData.message || "somthing error in catching dada , try again";
      throw error;
    }
    context.commit("setMealsByIngredients", responceData.meals);
  },
};
