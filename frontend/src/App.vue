<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "Kalam Light";
  src: url(./assets/fonts/Kalam-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Kalam Regular";
  src: url(./assets/fonts/Kalam-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Kalam Bold";
  src: url(./assets/fonts/Kalam-Bold.ttf) format("truetype");
}

ul,
li {
  list-style: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Kalam Light";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/images/background.png);
}

#app {
}

.button {
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  width: 100%;
  font-size: 18px;
  font-family: "Kalam Bold";
}

.button-primary {
  background-color: #b1daed;
  border: 2.5px solid #b1daed;
  color: #81472e;
}

.button-primary:hover {
  background-color: #81472e;
  color: #b1daed;
}

.button-secondary {
  background-color: #81472e;
  border: 2.5px solid #b1daed;
  color: #b1daed;
}

.button-secondary:hover {
  background-color: #b1daed;
  color: #81472e;
}

.divider {
  background-color: #5dff18;
  height: 2px;
  margin: 15px 0;
}
</style>
