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
  padding: 0 1.2rem;
  .post-card-list {
    display: flex;
    align-content: center;
    position: relative;
    width: 100%;    
    box-sizing: border-box;
    padding-left: 0;
    .post-card-item {    
      min-width: 80%;
      margin-right: 0.5rem;
      padding: 1.5rem;
      border: 0.1rem solid #e6ebf0;
      border-radius: 0.6rem;
      .post-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 1.2rem;                
      }
      .post-text {
        font-weight: 500;
      }
      .image-wrapper {
        display: block;
        position: relative;
        object-fit: contain;     
        margin-top: 0.25rem;
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
