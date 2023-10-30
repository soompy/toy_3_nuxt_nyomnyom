<!-- Please remove this file from your project -->
<template>
  <div class="app-container">    
    <!-- <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" /> -->

    <section class="media-play">
      <div class="top-box">
        <p>
          퐁실한 수플레 만들기! <br>
          성공방법 노하우 클래스
        </p>
      </div>
      <div class="best-play-container">
        <div class="best-play-box">
          <YoutubeFrame :video-id="videoId" />
        </div>
      </div>
    </section>
    
    <SliderTab />    
  </div>
</template>

<script>
import YoutubeFrame from "./widgets/card/youtubeFrame.vue";
import Login from "./widgets/form/LoginForm.vue";
import SliderTab from "./widgets/list/sliderTab.vue";

export default {
  name: "NuxtTutorial",
  data() {
    return {
      videoId: "3bZM8eux_ro?si=QkAaGJmHgKzb48xw",      
    };
  },
  components: { Login, SliderTab, YoutubeFrame },
  build: {
    css: ["@/assets/main.css"],
  },
};
</script>

<style lang="scss" scoped>
</style>
