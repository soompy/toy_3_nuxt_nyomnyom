<template>
  <div class="gallery">
    <GalleryItem
      v-for="(item, index) in galleryItems"
      :key="index"
      :width="item.width"
      :height="item.height"
    />
  </div>
</template>

<script>
import GalleryItem from "./galleryItem.vue";

export default {
  name: "GalleryBox",
  components: { GalleryItem },
  data() {
    return {
      galleryItems: [],
    };
  },
  methods: {
    getRandomSize(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateGalleryItems() {
      for (let i = 0; i < 12; i++) {
        const width = this.getRandomSize(200, 400);
        const height = this.getRandomSize(200, 300);
        this.galleryItems.push({ width, height });
      }
    },
  },
  mounted() {
    this.generateGalleryItems();
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
