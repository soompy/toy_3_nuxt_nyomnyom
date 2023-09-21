<template>
  <div>
    <div class="diary-item" v-for="(diary, index) in diarys" :key="index">
      <span class="thumbnail-image">
        <img
          :src="require(`../../assets/images/media/${diary.image}.jpg`)"
          :alt="diary.photoName"
        />
      </span>
      <div class="text-box">
        <h4 class="diary-title">{{ diary.title }}</h4>
        <p class="diary-date">{{ diary.date }}</p>
        <button
          class="btn like"
          :class="{ on: !likeIcons[index] }"
          @click="toggleLikeIcon(index)"          
        >
          <Icon
            :name="likeIcons[index] ? 'heart-regular' : 'heart-solid'"
            width="24"
            height="24"            
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCp from "../../components/button/ButtonCp.vue";
import Icon from "../../components/icon/icon.vue";

export default {
  components: { ButtonCp, Icon },
  name: "DiaryList",
  data() {
    return {
      diarys: [
        {
          image: "diary_00",
          photoName: "푸바오의 뚠빵뚠빵한 하루",
          title: "푸바오의 뚠빵뚠빵한 하루",
          date: "2023.08.29",
        },
        {
          image: "diary_01",
          photoName: "푸바오의 복지 벤치",
          title: "푸바오의 복지 벤치",
          date: "2023.08.31",
        },
        {
          image: "diary_02",
          photoName: "머위잎을 쓴 뚠뚠이 푸바오",
          title: "머위잎을 쓴 뚠뚠이 푸바오",
          date: "2023.08.30",
        },
      ],
      likeIcons: [],
    };
  },
  created() {
    this.likeIcons = Array(this.diarys.length).fill(true);
  },
  methods: {
    toggleLikeIcon(index) {   
      this.$set(this.likeIcons, index, !this.likeIcons[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
.diary-item {
  position: relative;  
  border-bottom: 1px solid #E2E2E2;    
  padding: 1.4rem 0;
  .thumbnail-image {
    overflow: hidden;
    display: block;
    width: 100%;
    border-radius:0.5rem;
  }
  .text-box {
    margin-top: 1rem;
    .diary-title {
      font-size: 1rem;
      font-weight: bold;
    }
    .diary-date {
      font-size: 0.8rem;
      margin: 0.5rem 0 0 0;      
    }
    .btn {
      display: flex;
      margin-left: auto;
      padding: 0;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
