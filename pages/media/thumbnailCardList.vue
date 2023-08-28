<template>
  <ul class="thumbnail-card">
    <li v-for="(thumb, index) in thumbs" :key="index">
      <a href="">
        <span class="thumbnail"
          ><img
            :src="require(`../../assets/images/panda/${thumb.image}.webp`)"
            :alt="thumb.title"
        /></span>
        <p>{{ thumb.text }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "thumbnailCardList",
  props: {
    thumbs: Array,
  },
};
</script>

<style lang="scss" scoped>
.thumbnail-card {
  overflow-x: auto;
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;  
  width: 200%;
  li {
    width: 60px;
    margin: 6px;
    a {
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      .thumbnail {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 60px;
        border-radius: 50%;
        background: #eeeeee;
      }
      p {
        font-size: 12px;
        text-align: center;
        margin-top: 6px;
      }
    }
  }
}
</style>
