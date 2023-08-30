<template>
  <div class="gallery-item" :style="{ width: width + 'px', height: height + 'px' }"></div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: {
    width: Number,
    height: Number,
  },
};
</script>

<style lang="scss" scoped>
.gallery-item {
  overflow: hidden;
  margin: 5px;
  border: 1px solid #ddd;
}
</style>
