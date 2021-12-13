<template>
  <div class="pokemons-table">
    <template v-if="isLoading">
      <loader />
    </template>
    <div v-if="!isLoading">
      <main-input @search-pokemon="searchPokemon" />
      <template v-if="pokemonsByStatus.length">
        <div class="container container-table">
          <pokemon-item
            @open-details-pokemon="showPokemon"
            @change-status-favorite-pokemon="changeStatusPokemon"
            v-for="(pokemon, index) in pokemonsByStatus"
            :key="index"
            :isFavorite="pokemon.favorite"
            :pokemon="pokemon"
          />
        </div>
        <div ref="observer"></div>
        <action-buttons />
      </template>
      <template v-if="filteredPokemons.length === 0">
        <main-conten-welcome
          :type="type"
          :title="title"
          :subtitle="subtitle"
          :textButton="textButton"
          :active="true"
          @emit-click="goBack"
        />
      </template>
      <pokemon-modal
        v-if="showModal"
        @close-modal="closeDetailModal"
        :isFavorite="isFavorite"
        @change-status-favorite-pokemon="changeStatusPokemon"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainInput from "../components/inputs/mainInput.vue";
import MainContenWelcome from "../components/home/mainContentWelcome.vue";
import PokemonItem from "../components/pokemonsTable/PokemonItem.vue";
import ActionButtons from "../components/buttons/actionButtons.vue";
import PokemonModal from "../components/pokemonsTable/pokemonModal.vue";
import Loader from "../components/shared/loader.vue";
export default {
  name: "PokemonsTable",
  components: {
    PokemonItem,
    MainInput,
    ActionButtons,
    PokemonModal,
    MainContenWelcome,
    Loader,
  },
  computed: {
    ...mapGetters("pokemon", [
      "pokemons",
      "pokemon",
      "getShowAllPokemonsByDefault",
      "favoritePokemons",
      "filteredPokemons",
    ]),
    pokemonsByStatus() {
      if (this.showFilteredPokemons) {
        return this.filteredPokemons;
      }
      return this.getShowAllPokemonsByDefault
        ? this.pokemons
        : this.favoritePokemons;
    },
  },
  data() {
    return {
      showFilteredPokemons: false,
      showModal: false,
      isFavorite: false,
      isLoading: false,
      page: 0,
      observer: null,
      type: "NotFound",
      title: "Uh-oh!",
      subtitle: "You look lost on your jorney!",
      textButton: "Go back home",
    };
  },
  async mounted() {
    await this.fetchAllPokemons(this.offset());
    this.observer = new IntersectionObserver(this.handleObserver);
    if (this.$refs.observer) {
      this.observer.observe(this.$refs.observer);
    }
  },
  destroyed() {
    this.observer.disconnect();
  },
  methods: {
    ...mapActions("pokemon", [
      "fetchAllPokemons",
      "fetchPokemonByName",
      "changeStatusFavoritePokemon",
      "cleanDetailModal",
      "filteredPokemonByName",
      "clearFilteredPokemons",
      "showAllPokemonsByDefault",
      "changeStatusAllIsActiveButton",
      "changeStatusFavoriteButton",
    ]),
    offset() {
      return this.page * 10;
    },
    handleObserver(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        this.page++;
        this.fetchAllPokemons(this.offset());
      }
    },
    async searchPokemon(e) {
      this.observer.disconnect();
      if (e.length > 3) {
        this.showFilteredPokemons = true;
        await this.filteredPokemonByName(e);
      }
      if (e === "") {
        this.showFilteredPokemons = false;
        this.observer.observe(this.$refs.observer);
        this.clearFilteredPokemons();
      }
    },
    nameWithCamelCase(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    changeStatusPokemon(pokemonName) {
      this.changeStatusFavoritePokemon(this.nameWithCamelCase(pokemonName));
      this.isFavorite = !this.isFavorite;
    },
    async showPokemon(pokemon) {
      await this.fetchPokemonByName(pokemon.name);
      this.isFavorite = pokemon.favorite;
      this.showModal = true;
    },
    closeDetailModal() {
      this.showModal = false;
      this.cleanDetailModal();
    },
    goBack() {
      this.showAllPokemonsByDefault(true);
      if (!this.buttonAllIsActive) {
        this.changeStatusAllIsActiveButton();
      }
      if (!this.buttonFavoriteIsActive) {
        this.changeStatusFavoriteButton();
      }
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemons-table {
  position: relative;
}
.container-table {
  margin-top: 20px;
  min-height: calc(100vh - 170px);
}
</style>
