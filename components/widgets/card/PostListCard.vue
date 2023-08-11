<template>
  <div class="post-card-list-wrapper">
    <ul class="post-card-list">
      <li class="post-card-item" v-for="(card, index) in listItems" :key="index">
        <h3 class="post-title">{{ card.title }}</h3>
        <p class="post-text">{{ card.text }}</p>
        <span class="image-wrapper w-30 h-30">
          <img
            :src="require(`../../../assets/images/${card.image}.png`)"
            :alt="card.title"
          />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  data() {
    return {
      listItems: [
        { title: "제목칸1", text: "소제목칸1", image: "photo_1_11zon" },
        { title: "제목칸2", text: "소제목칸5", image: "photo_2_1_11zon" },
        { title: "제목칸3", text: "소제목칸5", image: "photo_3_2_11zon" },
        { title: "제목칸4", text: "소제목칸", image: "photo_4_3_11zon" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.post-card-list-wrapper {
  overflow-x: auto;
  position: relative;
  width: 100%;
  padding: 0 20px;
  .post-card-list {
    display: flex;
    align-content: center;
    position: relative;
    width: 100%;    
    box-sizing: border-box;
    .post-card-item {
      min-width: 70%;
      margin-right: 16px;
      padding: 16px 20px;
      border: 1px solid #e6ebf0;
      border-radius: 6px;
      .post-title {
        font-size: 16px;
        font-weight: bold;        
      }
      .post-text {
        font-size: 14px;
        font-weight: 500;
      }
      .image-wrapper {
        display: block;
        position: relative;
        object-fit: contain;     
        margin-top: 4px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
