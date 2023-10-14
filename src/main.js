import { createApp } from "vue";
import "./style.css";
import router from "./router";
import store from "./store/store.js";
import LoadingSpinner from "./components/layout/LoadingSpinner.vue";
import MealItem from "./components/MealItem.vue";

import App from "./App.vue";

const app = createApp(App);
app.component("loading-spinner", LoadingSpinner);
app.component("meal-item", MealItem);
app.use(router);
app.use(store);
app.mount("#app");
