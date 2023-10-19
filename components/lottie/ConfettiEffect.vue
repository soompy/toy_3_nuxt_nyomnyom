<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  name: "ConfettiEffect",
  props: {
    animationData: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  mounted() {
    this.renderLottie();
  },
  methods: {
    renderLottie() {
      lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: this.animationData,
      });
    },
  },
};
</script>

<style scoped>

</style>
