<template>
  <div>
    <section class="slider-wrapper" v-for="(card, idx) in cards" :key="idx">
      <p>{{ card.top }}</p>
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
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    cards: Array,
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  overflow-x: auto;
  width: 100%;
  padding: 20px;
  .slider-box {
    display: flex;
    align-content: center;
    width: 100%;
    .slide-item {
      overflow: hidden;
      flex-shrink: 0;
      width: 90%;
      height: 60vh;
      margin-right: 18px;
      box-shadow: 6px 6px 10px 4px rgba(0, 0, 0, 0.2);
      border-radius: 14px;
      .slide-picture {
        display: block;
        object-fit: cover;
        height: 70%;
      }
      .slide-text {
        display: block;
        padding: 20px 16px;
        strong {
          display: block;
          font-size: 12px;
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
}
</style>
