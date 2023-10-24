<template>
  <div>
    <div class="diary-item" v-for="(diary, index) in diarys" :key="index">
      <span class="thumbnail-image">
        <img
          :src="require(`../../assets/images/story/${diary.image}.png`)"
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
          image: "meat_00",
          photoName: "차돌박이",
          title: "배터지게 먹는 한우 차돌박이",
          date: "2023.08.29",
        },
        {
          image: "pancake_00",
          photoName: "수플레 팬케이크",
          title: "푹신푹신 수플레 팬케이크 만들기",
          date: "2023.08.31",
        },
        {
          image: "shrimp_00",
          photoName: "대하구이",
          title: "제철 대하소금구이",
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
  border-bottom: 1px solid #cccccc;    
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
