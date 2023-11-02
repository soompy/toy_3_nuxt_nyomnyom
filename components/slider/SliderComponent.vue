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
  position: relative;  
  width: 100%;
  .slider-box {
    overflow-x: auto;
    display: flex;        
    padding: 20px;
    .slide-item {
      overflow: hidden;
      flex-shrink: 0;  
      width: 70%;
      height: 50vh;
      margin-right: 20px;      
      background: rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.7px);
      border: 1px solid rgba(255, 255, 255, 0.3);
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
