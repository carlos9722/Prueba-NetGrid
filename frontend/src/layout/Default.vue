<template>
  <div>
    <NavBar />
    <slot />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Default",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
