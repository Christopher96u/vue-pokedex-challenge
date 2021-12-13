<template>
  <button
    class="main-button"
    :class="[active ? 'active' : 'disabled', block ? 'block' : '']"
    @click="emitClick"
  >
    <i v-if="validateIcon" class="icon" :class="`${iconName}-icon`"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mainButton",
  computed: {
    validateIcon() {
      return [
        "star",
        "star-disabled",
        "star-active",
        "all",
        "search",
        "close",
      ].includes(this.iconName);
    },
  },
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: null,
      validate: (value) =>
        [
          "star",
          "star-disabled",
          "star-active",
          "all",
          "search",
          "close",
        ].includes(value),
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick() {
      this.$emit("emit-click", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";
.main-button {
  color: $white-color;
  border-radius: 60px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border-color: transparent;
  justify-content: center;
  display: flex;
  align-items: center;
}
.block {
  width: 100%;
}
.main-button.active {
  background-color: $primary-color;
  transition: all 0.4s linear;
}
.main-button i {
  margin-right: 10px;
}
.main-button.active:active {
  background-color: $primary-active-color;
}
.main-button.disabled {
  background-color: $text-input-color;
}
</style>