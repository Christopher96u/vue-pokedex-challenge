<template>
  <div class="container-image">
    <img
      :src="require('@/assets/images/pikachu.png')"
      alt="Pikachu with pokeball"
    />
  </div>
</template>

<script>
export default {
  name: "pikachuWelcome",
};
</script>

<style lang="scss" scoped>
.container-image {
  position: relative;
  height: 350px;
  margin-top: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 330px;
  }
}
@media (max-width: 768px) {
  .container-image {
    margin-top: 0;
    height: 280px;
    img {
      max-width: 250px;
    }
  }
}
</style>
