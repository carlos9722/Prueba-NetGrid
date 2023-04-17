<template>
  <div class="card-container">
    <img
      @click="addFavorite()"
      class="favorite"
      :src="getFavorite"
      width="30"
    />
    <div><img class="card-avatar" :src="image" alt="avatar" /></div>
    <router-link :to="{ path: `characters/${id}` }"> {{ name }} </router-link>
  </div>
</template>

<script>

import {addFavorites, deleteFavorite} from '@/services/UserService'

export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
  },

  computed: {
    getFavorite() {
      return this.$store.getters.someFavorite(this.id)
        ? require("../assets/icons/favorite_red.svg")
        : require("../assets/icons/favorite_black.svg");
    },
  },

  methods: {
    async addFavorite() {
      const favorite = this.$store.getters.getFavorite(this.id);
      if (favorite) {
        deleteFavorite(favorite.idRegister)
      } else {
        await addFavorites(this.id)
      }
      this.$store.dispatch("addCharacter", this.id);
    },
  },
};
</script>

<style>
.card-container {
  align-items: center;
  background-color: #b1daed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 250px;
  padding: 10px;
  position: relative;
}

.card-container a {
  font-family: "Kalam Bold";
  color: black;
}

.card-container:hover {
  transform: rotateY(0) scale(1.03);
  transition: 400ms;
}

.card-avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.favorite {
  top: 4px;
  right: 4px;
  position: absolute;
  cursor: pointer;
}
</style>
