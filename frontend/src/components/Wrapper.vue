<template>
  <div class="container">
    <img
      alt="Logo"
      src="../assets/images/rickandmorty.png"
      width="350"
      height="120"
    />
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  background-color: #81472e;
  margin: 80px auto;
  max-width: 100%;
  width: 350px;
  padding: 10px 20px 40px;
  border-radius: 8px;
}
</style>
