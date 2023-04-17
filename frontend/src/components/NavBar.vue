<template>
  <nav class="nav">
    <router-link to="/characters">
      <img
        class="nav-logo"
        src="../assets/images/rickandmorty.png"
        alt="logo"
      />
    </router-link>
    <div class="section">
      <!-- <img src="../assets/icons/account.svg" alt="account" width="60px" /> -->
      <router-link to="/profile">Perfil</router-link>
      <button @click="logOut()">Logout</button>
    </div>
  </nav>
</template>

<script>
import { signOff } from "../utils/session";
export default {
  name: "NavBar",

  methods: {
    logOut() {
      signOff();
    },
  },
};
</script>

<style>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 1;
  background-color: #b1daed;
  box-shadow: 0px 4px 8px #5dff18;
  height: 80px;
  margin-bottom: 40px;
  position: sticky;
  top: 0;
}

.nav-logo {
  align-self: flex-start;
  width: 180px;
  height: 60px;
}

.section {
  display: flex;
  gap: 10px;
  align-items: center;
}

.section > a {
  font-family: "Kalam Bold";
  font-size: 22px;
  color: #81472e;
}
</style>
