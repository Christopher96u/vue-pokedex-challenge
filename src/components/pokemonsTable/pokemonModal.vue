<template>
  <div class="modal container-fluid">
    <div class="pokemon-card">
      <span class="close" @click="closeModal">
        <i class="icon close-icon"></i>
      </span>
      <div
        class="pokemon-card-img"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/landscape-background.png') + ')',
        }"
      >
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
        />
      </div>
      <div class="pokemon-card-content">
        <div class="pokemon-card-text">
          <p v-for="(item, key) in typesOfPokemonFormatted()" :key="key">
            <strong>{{ item.key }}:</strong>
            <span>
              {{ item.value }}
            </span>
          </p>
        </div>
        <div class="pokemon-card-button">
          <main-button
            :active="true"
            @emit-click="copyClipboard(typesOfPokemonFormatted())"
          >
            Share to my friends
          </main-button>
          <span class="background-icon">
            <i
              @click="changeStatus(pokemon.name)"
              class="icon"
              :class="`star-${isFavorite ? 'active' : 'disabled'}-icon`"
            ></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { copyPokemonToClipboard } from "@/utils/copyPokemon";
import mainButton from "../buttons/mainButton.vue";
export default {
  components: { mainButton },
  name: "PokemonModal",
  props: {
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters("pokemon", ["pokemon"]),
  },
  methods: {
    ...mapActions("pokemon", ["changeStatusFavoritePokemon"]),
    closeModal() {
      return this.$emit("close-modal", true);
    },
    nameWithCamelCase(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    typesSkillsFormatted(types) {
      let typesFormated = types.map(
        (c) => c.type.name.charAt(0).toUpperCase() + c.type.name.slice(1)
      );
      typesFormated = typesFormated.join(", ");
      return typesFormated;
    },
    typesOfPokemonFormatted() {
      if (this.pokemon.types) {
        const nameFormatted = this.nameWithCamelCase(this.pokemon.name);
        let typesFormated = this.typesSkillsFormatted(this.pokemon.types);
        return [
          { key: "Name", value: nameFormatted },
          { key: "Weight", value: this.pokemon.weight },
          { key: "Height", value: this.pokemon.height },
          { key: "Types", value: typesFormated },
        ];
      }
      return [];
    },
    changeStatus(pokemonName) {
      this.$emit("change-status-favorite-pokemon", pokemonName);
    },
    async copyClipboard() {
      await copyPokemonToClipboard(
        [
          `Name: ${this.pokemon.name}`,
          `Weight: ${this.pokemon.weight}`,
          `Height: ${this.pokemon.height}`,
          `Types: ${this.typesSkillsFormatted(this.pokemon.types)}`,
        ].join(", ")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
.modal {
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-card {
  height: 500px;
  width: 650px;
  background: #ffffff;
  position: relative;
}

.pokemon-card-content {
  width: 80%;
  margin: 20px auto;
}

.pokemon-card .pokemon-card-img {
  background-repeat: no-repeat;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-card .pokemon-card-text {
  position: relative;
}
.pokemon-card .pokemon-card-img img {
  width: 200px;
}
.pokemon-card-text p span:first-child {
  font-weight: 700;
}

.pokemon-card-text p {
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.pokemon-card .pokemon-card-text p::after {
  position: absolute;
  transform: translateY(30px);
  background-color: #e8e8e8;
  height: 1px;
  width: 100%;
  left: 0;
}

.pokemon-card-button {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pokemon-card-button span i {
  cursor: pointer;
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
.background-icon {
  background-color: $light-gray-color;
  border-radius: 50%;
  padding: 7.5px;
}

@media (max-width: 427px) {
  .card {
    width: 350px;
  }
}
</style>