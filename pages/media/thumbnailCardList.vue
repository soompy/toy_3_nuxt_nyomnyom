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
  padding-left: 0;
  margin-bottom: 0;
  li {
    width: 4rem;
    height: auto;
    margin: 0.5rem;
    a {
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;      
      .thumbnail {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 4rem;
        border-radius: 50%;
        background: #eeeeee;
      }
      p {
        font-size: 0.8rem;
        text-align: center;
        margin: 0.5rem 0 0 0;
      }
    }
  }
}
</style>
