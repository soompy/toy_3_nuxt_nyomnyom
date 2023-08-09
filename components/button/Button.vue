<template>
  <button
    :style="{
      width: width + 'px',
      height: height + 'px',
      backgroundColor: backgroundColor,
      color: textColor,
    }"
    @click="handleClick"
    :disabled="!isEnabled"
  >
    {{ label }}
  </button>
</template>
  
<script>
export default {
  name: 'Button',
  props: {
    label: String,
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 40,
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    textColor: {
      type: String,
      default: 'black',
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      if (this.isEnabled) {
        this.$emit('click');
      }
    },
  },
};
</script>
  
<style scoped>
  button {
    border: none;
    cursor: pointer;
  }
</style>
  