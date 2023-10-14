<template>
  <the-header></the-header>
  <router-view></router-view>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
