<template>
  <section class="media-play">
    <div class="top-box">
      <p>
        1초도 놓칠 수 없바옹 <br>
        오늘은 또 어떤 귀여운 바오가!!
      </p>
    </div>
    <div class="best-play-container">
      <div class="best-play-box">
        <YoutubeFrame :video-id="videoId" />
      </div>
      <button class="btn secondary type-line w-50 h-10 mt-3 m-auto">더보기</button>
    </div>
  </section>
</template>

<script>
import YoutubeFrame from "../../components/widgets/card/youtubeFrame.vue";

export default {
  name: "MediaPlayer",
  components: {
    YoutubeFrame,
  },
  data() {
    return {
        videoId: "KRDH7IJ-P14?si=7yNa1BkltIaBIdTU&amp",
    }
  },  
};
</script>

<style lang="scss" scoped>
.btn {
  display: inherit;      
  font-size: 0.8rem;
  text-align: center;
  background: transparent;
}
</style>