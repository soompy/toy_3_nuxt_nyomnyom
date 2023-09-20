<template>
  <section class="slider-wrapper">
    <div class="slider-box">
      <div class="slide-item" v-for="(item, index) in items" :key="index">
        <span class="slide-picture">
          <img
            :src="require(`../../assets/images/panda/${item.photo}.webp`)"
            :alt="item.name"
          />
        </span>
        <span class="slide-text">
          <strong>{{ item.title }}</strong>
          <span>{{ item.description }}</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  overflow-x: auto;
  width: 100%;
  padding: 1rem;
  
  .slider-box {
    display: flex;
    align-content: center;
    width: 100%;
    .slide-item {
      overflow: hidden;
      flex-shrink: 0;  
      width: 70%;
      height: 50vh;
      margin-right: 1rem;      
      border-radius: 0.8rem;
      .slide-picture {
        display: block;
        object-fit: cover;
        height: 70%;
      }
      .slide-text {
        display: block;
        padding: 1rem 0;
        strong {
          display: block;
          font-size: 0.9rem;
          font-family: "Caprasimo", cursive;
        }
        span {
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
