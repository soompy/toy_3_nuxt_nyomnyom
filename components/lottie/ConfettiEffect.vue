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
        renderer: "svg", // 렌더링 방식 선택 (SVG, HTML, Canvas 등)
        loop: true, // 반복 여부
        autoplay: true, // 자동 재생 여부
        animationData: this.animationData,
      });
    },
  },
};
</script>

<style scoped>
/* 스타일링을 원하는 대로 추가하세요 */
</style>
