<template>
  <div class="characters-container">
    <Card
      v-for="character in characters"
      :key="character.id"
      :image="character.image"
      :id="character.id"
      :species="character.species"
      :status="character.status"
      :name="character.name"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { getCharacters } from "../services/RickandMortyService";
export default {
  name: "Characters",
  components: {
    Card,
  },
  data: () => {
    return {
      characters: [],
    };
  },
  methods: {
    async list() {
      const res = await getCharacters();
      this.characters = res.data.results;
    },
  },

  created() {
    this.list();
    this.$store.dispatch('listFavorites')
  },
};
</script>

<style>
.characters-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
