<template>
  <div>
    <section class="thumbnail-wrapper">
      <thumbnail-card-list :thumbs="thumbs"></thumbnail-card-list>
    </section>
    
    <section class="thumbnail-card-wrapper"></section>
   
    <MediaPlayer />

    <section class="media-diary">
      <DiaryList />
    </section>

    <ButtonCp
      class="btn type-line primary flex w-60 d-flex items-center justify-center mb-10 mx-auto"
      label="뇸뇸 수플레 예약하기"
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
            <ButtonCp
              class="btn primary pl-4 pr-4 flex items-center mt-4 m-auto"
              label="뇸뇸 수플레 예약하기"
              :height="40"
              textColor="white"
              @click="openPopup"
            />           
          </div>
          <div v-else>                        
            <div class="food-text">
              <p>가장 맛있는 뇸뇸 수플레 <br />먹으러 가기!</p>
              <ButtonCp
                class="btn primary pl-4 pr-4 mt-8 flex items-center m-auto"
                label="신청 캘린더 보기"
                :height="40"
                textColor="white"
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
import DatePicker from '../../components/widgets/datePicker.vue';
import DiaryList from "./diaryList.vue";
import MediaPlayer from './mediaPlayer.vue';
import ThumbnailCardList from "./thumbnailCardList.vue";

export default {
  name: "MediaContents",
  components: {
    ButtonCp,
    DiaryList,
    ThumbnailCardList,
    DatePicker,
    MediaPlayer,
  },
  mounted() {
    console.log(this.$route.name);
  },

  data() {
    return {
      popupOn: false,
      showCalendar: false,
      thumbs: [
        { image: "burger_00", title: "1번", text: "빅맥" },
        { image: "burger_01", title: "2번", text: "더블 쿼터파운더 치즈" },
        { image: "burger_02", title: "3번", text: "맥스파이시 상하이 버거" },
        { image: "pizza_00", title: "4번", text: "씨푸드킹" },
        { image: "pizza_01", title: "5번", text: "립스테이크" },
        { image: "pizza_02", title: "6번", text: "토핑킹" },
        { image: "hotdog_00", title: "6번", text: "감자핫도그" },
        { image: "hotdog_01", title: "6번", text: "모짜체다 핫도그" },
        { image: "chicken_00", title: "6번", text: "켄터키통다리순살치킨 5조각" },
        { image: "chicken_01", title: "6번", text: "갓양념치킨 5조각" },
        { image: "taco_00", title: "6번", text: "쉬림프 타코" },
        { image: "taco_01", title: "6번", text: "치즈 나초" },
        { image: "taco_02", title: "6번", text: "빅벨박스" },
      ],
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
  padding: 1rem;
}
.media-diary {
  padding: 1.25rem;
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
      .food-text {
        position: relative;
        z-index: 5;
      }
    }
  }
}
.btn {
  font-size: 0.9rem;
}
</style>
