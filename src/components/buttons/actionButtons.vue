<template>
  <div class="container-fluid container-footer">
    <div class="container footer">
      <main-button
        :active="buttonAllIsActive"
        iconName="all"
        @emit-click="showAllPokemons"
        :block="true"
      >
        All
      </main-button>
      <main-button
        :active="buttonFavoriteIsActive"
        iconName="star"
        :block="true"
        @emit-click="showFavoritePokemons"
      >
        Favorites
      </main-button>
    </div>
  </div>
</template>

<script>
import mainButton from "./mainButton.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { mainButton },
  name: "ActionButtons",
  computed: {
    ...mapGetters("pokemon", [
      "buttonFavoriteIsActive",
      "buttonAllIsActive",
      "getShowAllPokemonsByDefault",
    ]),
  },
  methods: {
    ...mapActions("pokemon", [
      "getAllPokemons",
      "getAllFavoritePokemons",
      "showAllPokemonsByDefault",
      "changeStatusAllIsActiveButton",
      "changeStatusFavoriteButton",
    ]),
    showAllPokemons() {
      this.showAllPokemonsByDefault(true);
      if (!this.buttonAllIsActive) {
        this.changeStatusAllIsActiveButton();
        this.changeStatusFavoriteButton();
      }
    },
    showFavoritePokemons() {
      this.showAllPokemonsByDefault(false);
      if (!this.buttonFavoriteIsActive) {
        this.changeStatusFavoriteButton();
        this.changeStatusAllIsActiveButton();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.container-footer {
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  background: white;
  position: sticky;
  bottom: 0;
}
.container-footer button:first-child {
  margin-right: 10px;
}
.container-footer button:last-child {
  margin-left: 10px;
}
</style>