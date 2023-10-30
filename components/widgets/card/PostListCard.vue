<template>
  <div class="post-card-list-wrapper">
    <ul class="post-card-list">
      <li class="post-card-item" v-for="(card, index) in listItems" :key="index">
        <span class="image-wrapper w-30 h-30" v-if="card.image">
          <img            
            :src="getImagePath(card.image)"
            :alt="card.title"
          />
        </span>
        <div class="post-text-box">
          <h3 class="post-title">{{ card.title }}</h3>
          <p class="post-text">{{ card.text }}</p>                
        </div>        
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
  padding: 20px;
  .post-card-list {
    display: flex;
    align-content: center;
    position: relative;
    width: 100%;    
    box-sizing: border-box;
    padding: 0;
    .post-card-item {
      overflow: hidden;    
      min-width: 80%;
      margin-right: 1rem;
      box-shadow: 0 0.12rem 0.3rem rgba(0, 0, 0, .05);
      border: 0.06rem solid rgba(0, 0, 0, .05);
      border-radius: 0.6rem;
      .image-wrapper {
        display: block;
        position: relative;
        object-fit: contain;             
      }
      .post-text-box {
        padding: 1rem;
        .post-title {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0.6rem;
        }
        .post-text {
          font-size: 0.9rem;
          font-weight: 500;
          margin: 0;
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
