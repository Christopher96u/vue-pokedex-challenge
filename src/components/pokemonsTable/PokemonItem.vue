<template>
  <div class="pokemon-row">
    <p @click="openDetailsPokemon(pokemon)">{{ pokemon.name }}</p>
    <span class="background-icon">
      <i
        @click="changeStatusFavoritePokemon(pokemon.name)"
        class="icon favorite"
        :class="`star-${isFavorite ? 'active' : 'disabled'}-icon`"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "PokemonItem",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    openDetailsPokemon(pokemon) {
      return this.$emit("open-details-pokemon", pokemon);
    },
    changeStatusFavoritePokemon(pokemonName) {
      return this.$emit("change-status-favorite-pokemon", pokemonName);
    },
    changeStatusPokemon(pokemonName) {
      this.changeStatusFavoritePokemon(this.nameWithCamelCase(pokemonName));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
.pokemon-row {
  background-color: #ffffff;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  p {
    font-size: 22px;
    text-transform: capitalize;
    cursor: pointer;
  }
}
.background-icon {
  background-color: $light-gray-color;
  border-radius: 50%;
  padding: 7.5px;
}
.pokemon-row .favorite {
  cursor: pointer;
}
</style>