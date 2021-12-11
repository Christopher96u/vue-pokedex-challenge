<template>
  <div class="container main-text">
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ subtitle }}
    </p>
    <main-button :active="active" @emit-click="emitClick" :iconName="iconName">
      {{ textButton }}
    </main-button>
  </div>
</template>

<script>
import mainButton from "@/components/buttons/mainButton.vue";
export default {
  name: "mainContentWelcome",
  components: {
    mainButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    textButton: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: false,
      default: null,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  methods: {
    emitClick() {
      console.log("emitClick from mainContentWelcome");
      this.$emit("emit-click", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variable.scss";
.main-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  p {
    color: $light-text-color;
    margin-bottom: 48px;
    margin-top: 30px;
  }
  h1 {
    margin-top: 58px;
  }
}
@media (max-width: 768px) {
  .main-text h1 {
    margin-top: 25px;
  }
}
</style>
