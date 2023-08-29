<template>
  <div>
    <section class="thumbnail-wrapper">
      <thumbnail-card-list :thumbs="thumbs"></thumbnail-card-list>
    </section>

    <!-- 마켓 콘텐츠들 -->
    <section class="thumbnail-card-wrapper"></section>

    <!-- 영상콘텐츠 -->
    <section class="media-play">
      <div class="top-box">
        <p>
          오늘의 푸바오 <br />
          <strong>Best</strong>영상
        </p>
      </div>
      <div class="best-play-container">
        <div class="best-play-box">
          <youtube-frame :video-id="videoId"></youtube-frame>
        </div>
      </div>
    </section>

    <section class="media-diary">
      <DiaryList />
    </section>

    <ButtonCp
      class="btn primary pl-4 pr-4 flex items-center m-auto"
      label="바오가족 보러가기"
      :height="46"
      textColor="black"
      @click="openPopup"
    />

    <section class="bottomPopup-wrapper" v-if="popupOn">
      <BottomPopup @close="closePopup">
        <div class="popup-inner">
          <div v-if="showCalendar">
            <p>신청 캘린더 UI 표시</p>
          </div>
          <div v-else>
            <p>귀여운 바오가족 보러 <br />판다월드 가기!</p>
            <ButtonCp
              class="btn primary pl-4 pr-4 mt-8 flex items-center m-auto"
              label="신청 캘린더 보기"
              :height="46"
              textColor="black"
              @click="showCalendar = true"
            />
          </div>
        </div>
      </BottomPopup>
    </section>
  </div>
</template>

<script>
import ButtonCp from "../../components/button/ButtonCp.vue";
import YoutubeFrame from "../../components/widgets/card/youtubeFrame.vue";
import DiaryList from "./diaryList.vue";
import ThumbnailCardList from "./thumbnailCardList.vue";

export default {
  name: "MediaContents",
  components: {
    ButtonCp,
    YoutubeFrame,
    DiaryList,
    ThumbnailCardList,
  },
  mounted() {
    console.log(this.$route.name);
  },

  data() {
    return {
      popupOn: false,
      showCalendar: false,
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
      this.showCalendar = false;
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

.media-diary {
  padding: 20px;
}
.bottomPopup-wrapper {
  position: relative;
  .popup-inner {    
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    > div {
      height: 100%;
    }
  }
}
</style>
