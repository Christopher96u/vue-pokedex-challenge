<template>
  <div class="container">
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
  </div>
</template>

<script>
import PikachuWelcome from "../components/home/pikachuWelcome.vue";
import MainContentWelcome from "../components/home/mainContentWelcome.vue";
export default {
  name: "Home",
  components: {
    PikachuWelcome,
    MainContentWelcome,
  },
  data() {
    return {
      type: "Welcome",
      title: "Welcome to Pokédex",
      subtitle:
        "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.",
      textButton: "Get started",
    };
  },
  methods: {
    goToListPokemons() {
      console.log("goToListPokemons route");
      this.$router.push("/pokemons");
    },
  },
};
</script>
