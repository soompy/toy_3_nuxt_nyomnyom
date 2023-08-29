<template>
  <img class="icon" :src="iconPath" :width="width" :height="height" />
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: String,
    width: {
      type: String,
      default: "1em",
    },
    height: {
      type: String,
      default: "1em",
    },
  },
  computed: {
    iconPath() {
      return require(`../../assets/icons/${this.name}.svg`);
    },
  },
};
</script>

<style scoped>
.icon {
  position: relative;
  display: block;
  fill: currentColor; 
}
</style>
