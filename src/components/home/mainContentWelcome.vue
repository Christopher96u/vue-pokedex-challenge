<template>
  <div class="container main-text">
    <h1 v-if="type === 'Welcome'">
      {{ title }}
    </h1>
    <h2 v-if="type === 'NotFound'">
      {{ title }}
    </h2>
    <p
      :class="{
        'font-size-small': type === 'Welcome',
        'font-size-regular': type === 'NotFound',
      }"
    >
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
    type: {
      type: String,
      required: false,
    },
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
.font-size-regular {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 25px;
  margin-top: 10px;
}
.font-size-small {
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 50px;
  margin-top: 30px;
}

.main-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  p {
    color: $light-text-color;
  }
  h1,
  h2 {
    margin-top: 58px;
  }
}
@media (max-width: 768px) {
  .main-text h1,
  h2 {
    margin-top: 25px;
  }
}
</style>
