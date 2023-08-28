<template>
  <div>
    <section class="thumbnail-wrapper">
      <thumbnail-card-list :thumbs="thumbs"></thumbnail-card-list>
    </section>

    <!-- 마켓 콘텐츠들 -->
    <section class="thumbnail-card-wrapper"></section>

    <!-- 영상콘텐츠 -->
    <section class="best-play">
      <div class="top-box">
        <p>
          오늘의 푸바오 <br />
          <strong>Best</strong>영상
        </p>
      </div>
      <div class="best-play-container">
        <div class="best-play-box">
          <youtube-frame :video-id="videoId"></youtube-frame>
          <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/KRDH7IJ-P14?si=7yNa1BkltIaBIdTU&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
        </div>
      </div>
    </section>

    <ButtonCp
      class="btn primary pl-4 pr-4"
      label="팝업온버튼"
      :height="46"
      textColor="white"
      @click="openPopup"
    />

    <section class="bottomPopup-wrapper" v-if="popupOn">
      <BottomPopup @close="closePopup">
        <div>테스트ㅇㅇㅇㅇㅇㅇ</div>
      </BottomPopup>
    </section>
  </div>
</template>

<script>
import ButtonCp from "../../components/button/ButtonCp.vue";
import YoutubeFrame from "../../components/widgets/card/youtubeFrame.vue";
import ThumbnailCardList from "./thumbnailCardList.vue";

export default {
  name: "MediaContents",
  components: {
    ButtonCp,
    ThumbnailCardList,
    YoutubeFrame,
  },
  mounted() {
    console.log(this.$route.name);
  },

  data() {
    return {
      popupOn: false,
      thumbs: [
        { image: "panda_ai_00", title: "1번", text: "사랑이" },
        { image: "panda_ai_01", title: "2번", text: "아이바오" },
        { image: "panda_ai_02", title: "3번", text: "엄마판다" },
        { image: "panda_aifu_00", title: "4번", text: "행복이와" },
        { image: "panda_aifu_01", title: "5번", text: "아기와 엄마" },
        { image: "panda_aifu_02", title: "6번", text: "아기판다" },
        { image: "panda_aifu_03", title: "6번", text: "딸 푸바오" },
        { image: "panda_aifu_04", title: "6번", text: "판다모녀" },
        { image: "panda_fu_00", title: "6번", text: "행복이" },
        { image: "panda_fu_01", title: "6번", text: "푸" },
        { image: "panda_le_00", title: "6번", text: "기쁨이" },
        { image: "panda_le_01", title: "6번", text: "러바오" },
        { image: "panda_le_02", title: "6번", text: "아빠판다" },
      ],
      videoId: "KRDH7IJ-P14?si=7yNa1BkltIaBIdTU&amp",
    };
  },
  methods: {
    openPopup() {
      this.popupOn = true;
    },
    closePopup() {
      this.popupOn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.thumbnail-wrapper {
  overflow-x: auto;
  width: 100%;
  padding: 16px;
}
.best-play {
  position: relative;
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
      text-shadow: -2px 0px #000000, 0px 2px #000000, 2px 0px #000000, 0px -2px #000000;
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
