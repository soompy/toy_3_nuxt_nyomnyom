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
            <p class="mb-4">방문일자를 선택해주세요!</p>  
            <date-picker></date-picker>          
          </div>
          <div v-else>            
            <span class="panda-bg"><img src="https://media.istockphoto.com/id/1149044549/ko/%EB%B2%A1%ED%84%B0/%EA%B7%80%EC%97%AC%EC%9A%B4-%ED%8C%AC%EB%8D%94-%EC%BA%90%EB%A6%AD%ED%84%B0-%EB%B2%A1%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8.jpg?s=170667a&w=0&k=20&c=PH3Halyrrh_BW2yYkYhcKte7k_ce5fxxnunIBtc8-44=" alt="판다일러스트"></span>
            <div class="panda-text">
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
        </div>
      </BottomPopup>
    </section>
  </div>
</template>

<script>
import ButtonCp from "../../components/button/ButtonCp.vue";
import YoutubeFrame from "../../components/widgets/card/youtubeFrame.vue";
import DatePicker from '../../components/widgets/datePicker.vue';
import DiaryList from "./diaryList.vue";
import ThumbnailCardList from "./thumbnailCardList.vue";

export default {
  name: "MediaContents",
  components: {
    ButtonCp,
    YoutubeFrame,
    DiaryList,
    ThumbnailCardList,
    DatePicker,
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
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    margin: auto;    
    > div {
      position: relative;
      .panda-bg {        
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        margin-top: 2px;
        img {
          opacity: 0.3;
          position: relative;              
        }
      }
      .panda-text {
        position: relative;
        z-index: 5;
      }
    }        
  }
}
</style>
