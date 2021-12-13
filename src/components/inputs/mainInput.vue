<template>
  <div class="container input-container">
    <input type="text" placeholder="Search" @input="searchPokemon" />
    <span>
      <i class="icon search-icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "MainInput",
  methods: {
    searchPokemon(event) {
      return this.$emit("search-pokemon", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import "@/assets/scss/_variable.scss";
.input-container {
  position: sticky;
  top: 0;
  margin-top: 50px;
  background: #ffffff;
}
.search-icon {
  position: absolute;
  top: 15px;
  left: 10px;
}
input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 0px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border: none;
  color: $bold-text-color;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  padding-left: 40px;
}
input:focus-visible {
  outline: none;
}
</style>