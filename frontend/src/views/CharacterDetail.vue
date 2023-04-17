<template>
  <div class="detail-container">
    <router-link to="/characters">Atras</router-link>
    <div class="detail-card">
      <img :src="character.image" />
      <div class="detail-description">
        <span class="detail-title">{{ character.name }}</span>
        <hr />
        <div class="characters-status">
          <div class="status" :class="getStatus" />
          {{ character.status }}
        </div>
        <p class="detail-subtitle">
          Genero: <span class="detail-text">{{ character.gender }}</span>
        </p>
        <p class="detail-subtitle">
          Especie: <span class="detail-text">{{ character.species }}</span>
        </p>
        <p class="detail-subtitle">
          Locacion:
          <span class="detail-text">{{ character.location?.name }}</span>
        </p>
        <p class="detail-subtitle">
          Origen: <span class="detail-text">{{ character.origin?.name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacter } from "../services/RickandMortyService";
export default {
  name: "character_detail",
  data: () => {
    return {
      character: {},
    };
  },
  async created() {
    const res = await getCharacter(this.$route.params.idCharacter);
    this.character = res.data;
  },

  computed: {
    getStatus() {
      switch (this.status) {
        case "Alive":
          return "status-color-alive";
        case "Dead":
          return "status-color-dead";
        default:
          return "status-color-unknown";
      }
    },
  },
};
</script>

<style>
.detail-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
}

.detail-card {
  background-color: #b1daed;
  display: flex;
  align-self: center;
  border: solid 1px #5dff18;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  padding: 20px;
}

.detail-description {
  width: 100%;
  text-align: left;
  margin-left: 40px;
}

.detail-title {
  font-family: "Kalam Bold";
  color: black;
  font-size: 27px;
}

.detail-subtitle {
  font-size: 20px;
  font-family: "Kalam Bold";
}

.detail-text {
  font-family: "Kalam Regular";
  color: gray;
}

.characters-status {
  font-size: 20px;
  font-family: "Kalam Bold";
  display: flex;
  justify-content: center;
}

.status {
  align-self: center;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 4px;
}

.status-color-alive {
  background-color: #5dff18;
}

.status-color-dead {
  background-color: red;
}

.status-color-unknown {
  background-color: rgb(75, 41, 41);
}
</style>
