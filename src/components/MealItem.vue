<template>
  <div class="row my-2 py-3">
    <div
      class="meal col-12 col-md-4 px-sm-3 my-3"
      v-for="meal of meals"
      :key="meal.idMeal"
    >
      <div class="info">
        <router-link
          class="show-details"
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        >
          <img :src="meal.strMealThumb" alt="#" />
        </router-link>
        <h2 class="my-3 px-3">{{ meal.strMeal }}</h2>
        <p class="my-3 px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores
          nemo maxime ea necessitatibus asperiores! Commodi expedita quaerat
          labore doloribus vitae cum!
        </p>

        <a :href="meal.strYoutube" target="_blank" class="youtube"
          ><i class="fa-brands fa-youtube fa-xl"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["meals"],
};
</script>

<style scoped>
.meal {
  border-radius: 8px;
  transition: 0.3s;
}
.meal:hover {
  transform: scale(1.05);
}
.meal:hover .show-details::before {
  display: block;
}

.info {
  background-color: #eeeeee8b;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.info h2 {
  color: orange;
}
.meal p {
  color: rgba(0, 0, 0, 0.56);
}
.show-details {
  position: relative;
}
.show-details::before {
  position: absolute;
  content: "Details";
  width: 60px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.559);
  color: white;
  font-weight: 800;
  top: 10%;
  left: 70%;
  border-top-left-radius: 50%;
  border-top-right-radius: 40%;
  border-bottom-right-radius: 40%;
  display: none;
  transition-delay: 0.3s;
}

img {
  max-width: 100%;
  border-radius: 8px;
}

.youtube i {
  color: orange;
  padding: 10px 10px;
  transition: 0.3s;
  cursor: pointer;
  margin: 14px 14px 20px 8px;
  font-size: 40px;
}
.youtube i:hover {
  color: #ff000092;
}
</style>
