<template>
  <div class="container">
    <template v-if="isLoading">
      <loader />
    </template>
    <template v-else>
      <pikachu-welcome />
      <main-content-welcome
        :type="type"
        :title="title"
        :subtitle="subtitle"
        :textButton="textButton"
        iconName="all"
        :active="true"
        @emit-click="goToListPokemons"
      />
    </template>
  </div>
</template>

<script>
import PikachuWelcome from "../components/home/pikachuWelcome.vue";
import MainContentWelcome from "../components/home/mainContentWelcome.vue";
import Loader from "../components/shared/loader.vue";
export default {
  name: "Home",
  components: {
    PikachuWelcome,
    MainContentWelcome,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      type: "Welcome",
      title: "Welcome to Pokédex",
      subtitle:
        "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.",
      textButton: "Get started",
    };
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  methods: {
    goToListPokemons() {
      this.$router.push("/pokemons");
    },
  },
};
</script>
