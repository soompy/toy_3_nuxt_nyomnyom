<template>
  <section class="media-play">
    <div class="top-box">
      <p>
        오늘의 푸바오 <br />
        <strong>Best</strong>영상
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
  videoId: "KRDH7IJ-P14?si=7yNa1BkltIaBIdTU&amp",
};
</script>

<style lang="scss" scoped>
.media-play {
  position: relative;
  width: 100%;
  height: calc(100% - 150px);
  .top-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-size: 60px 60px;
    padding: 20px;
    padding-bottom: 100px;
    p {
      font-size: 20px;
      font-weight: 500;
      font-family: "Noto Serif KR", serif;
    }
  }
  .best-play-container {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    padding: 0 20px;
    .best-play-box {
      overflow: hidden;
      border-radius: 20px;
    }
  }
}
</style>
