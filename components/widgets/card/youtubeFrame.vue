<template>
  <div class="youtube-container">
    <div class="video-wrapper">
      <iframe
        width="100%"
        height="100%"
        :src="youtubeVideoSrc"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "YoutubeFrame",
  props: {
    videoId: String,
  },
  computed: {
    youtubeVideoSrc() {
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1&controls=0`;
    },
  },
};
</script>

<style lang="scss" scoped>
.youtube-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  .video-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
