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
      padding-right: 20px;
      padding-bottom: 2rem;
      .image-wrapper {
        overflow: hidden;
        display: block;
        position: relative;        
        height: 16rem;
        border-radius: 1rem;     
        background: #00000010;   
        border: 1px solid #eeeeee;     
      }
      .post-text-box {
        position: relative;
        z-index: 1;
        object-fit: contain;
        background: rgba(255, 255, 255, 0.15);        
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6.7px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 1rem;
        margin-top: -2rem;
        margin: -2rem 1rem 0;
        border-radius: 1rem;
        .post-title {
          font-size: 1rem;
          line-height: 1.4rem;
          font-weight: bold;
          margin-bottom: 0.6rem;
        }
        .post-text {
          font-size: 0.9rem;
          line-height: 1.3rem;
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
