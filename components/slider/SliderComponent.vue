<template>
  <section class="slider-wrapper">
    <div class="slider-box">
      <div class="slide-item" v-for="(item, index) in items" :key="index">
        <span class="slide-picture">
          <img
            :src="require(`../../assets/images/food/${item.photo}.png`)"
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
      border: 1px solid #ece9e9;
      border-radius: 16px;
      .slide-picture {
        display: block;
        position: relative;
        height: 70%;
        img {
          object-fit: contain;          
        }
        &:after {
            display: block;
            clear: both;
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;            
            width: 100%;
            height: 2px;
            background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0) 100%);
        }
      }
      .slide-text {
        display: block;
        padding: 1rem 1.15rem;
        strong {
          display: block;
          font-size: 1rem;
          font-family: "Caprasimo", cursive;
          text-align: center;
          margin-bottom: 0.6rem;
        }
        span {
          font-size: 0.9rem;
          line-height: 1.3rem;
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
