<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link :to="{ name: 'home' }" class="master">Home</router-link>
      </div>
      <div class="my-links">
        <router-link :to="{ name: 'name' }">Search Meals</router-link>
        <router-link :to="{ name: 'letters' }">Meals By Letters</router-link>
        <router-link :to="{ name: 'ingredients' }"> Ingredients</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 1px 15px orange;
  padding: 0px 10px;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .my-links {
  display: flex;
  align-items: center;
}

header a {
  text-decoration: none;
  color: black;
  padding: 0px 10px;
  height: 50px;
  display: flex;
  align-items: center;
}

header a:hover {
  opacity: 0.8;
}

a.router-link-active {
  background-color: orange;
  color: white;
}

@media (max-width: 768px) {
  header a {
    /* flex: 1; */
    text-align: center;
    padding: 10px 5px;
  }
}
</style>
