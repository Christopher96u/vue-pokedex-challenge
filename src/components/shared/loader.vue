<template>
  <div class="loader">
    <img src="@/assets/images/pokeball-loader.png" alt="pokeball-loader" />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader img {
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>