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
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin-bottom: 20px;
  .thumbnail-image {
    display: block;
    width: 100%;
    height: 180px;
    border-radius: 8px;
  }
  .text-box {
    margin-top: 16px;
    .diary-title {
      font-size: 18px;
      font-weight: 300;
    }
    .diary-date {
      font-size: 14px;
      margin-top: 8px;
    }
    .btn {
      display: flex;
      margin-left: auto;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
