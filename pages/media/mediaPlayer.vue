<template>
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
        videoId: "3bZM8eux_ro?si=QkAaGJmHgKzb48xw",
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