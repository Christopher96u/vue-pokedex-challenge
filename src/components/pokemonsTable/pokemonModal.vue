<template>
  <div class="modal container-fluid" :key="isRefresh">
    <div class="card">
      <span class="close" @click="closeModal">
        <i class="icon close-icon"></i>
      </span>
      <div
        class="card-img"
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
      <div class="card-content">
        <div class="card-text">
          <p v-for="(item, key) in typesOfPokemonFormatted()" :key="key">
            <strong>{{ item.key }}:</strong>
            <span>
              {{ item.value }}
            </span>
          </p>
        </div>
        <div class="card-button">
          <main-button :active="true"> Share to my friends </main-button>
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
import mainButton from "../buttons/mainButton.vue";
export default {
  components: { mainButton },
  name: "PokemonModal",
  data() {
    return {
      isRefresh: 0,
      watchStatus: false,
    };
  },
  created() {
    console.log(this.pokemon.favorite);
  },
  props: {
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    watchStatus: function (val) {
      this.pokemon.favorite;
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
    typesOfPokemonFormatted() {
      if (this.pokemon.types) {
        const nameFormatted = this.nameWithCamelCase(this.pokemon.name);
        let typesFormated = this.pokemon.types.map(
          (c) => c.type.name.charAt(0).toUpperCase() + c.type.name.slice(1)
        );
        typesFormated = typesFormated.join(", ");
        return [
          { key: "Name", value: nameFormatted },
          { key: "Weight", value: this.pokemon.weight },
          { key: "Height", value: this.pokemon.height },
          { key: "Types", value: typesFormated },
        ];
      }
      return [];
    },
    change(pokemonName) {
      //this.$emit("change-status-favorite-pokemon", pokemonName);
      this.isRefresh++;
      console.log(this.pokemon.favorite);
    },
    changeStatus(pokemonName) {
      //this.changeStatusFavoritePokemon(this.nameWithCamelCase(pokemonName));
      this.$emit("change-status-favorite-pokemon", pokemonName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
.modal {
  position: fixed;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  height: 500px;
  width: 650px;
  background: white;
  position: relative;
}

.card-content {
  width: 80%;
  margin: 20px auto;
}

.card .card-img {
  background-repeat: no-repeat;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .card-img img {
  width: 200px;
}

.card .card-text {
  position: relative;
}

.card-text p span:first-child {
  font-weight: 700;
}

.card-text p {
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.card .card-text p::after {
  content: "";
  background-color: #e8e8e8;
  height: 1px;
  width: 100%;
  position: absolute;
  left: 0;
  transform: translateY(30px);
}

.card-button {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-button span i {
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