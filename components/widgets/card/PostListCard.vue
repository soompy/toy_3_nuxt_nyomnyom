<template>
  <div class="post-card-list-wrapper">
    <ul class="post-card-list">
      <li class="post-card-item" v-for="(card, index) in listItems" :key="index">
        <h3 class="post-title">{{ card.title }}</h3>
        <p class="post-text">{{ card.text }}</p>        
        <span class="image-wrapper w-30 h-30" v-if="card.image">
          <img            
            :src="getImagePath(card.image)"
            :alt="card.title"
          />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostListCard",   
  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImagePath(imageName) {
      return require(`../../../assets/images/${imageName}`);
    },
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

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
