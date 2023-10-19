<template>
  <ul class="interests-list">
    <li
      class="interests-item"
      v-for="(interest, index) in interests"
      :key="index"
      :class="{ active: activeTab === index }"
      @click="handleTabClick(index)"
    >
      <span class="image"
        ><img
          :src="require(`../../../assets/images/${interest.image}.png`)"
          :alt="interest.title"
      /></span>
      <p class="interests-name">{{ interest.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "InterestsList",
  props: {
    interests: Array,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    handleTabClick(index) {
      this.$emit("tabClicked", index);
      this.activeTab = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.interests-list {
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 0;
  .interests-item {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 0.3rem;
    .image {
      overflow: hidden;
      display: block;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    .interests-name {
      font-size: 0.8rem;
      text-align: center;
      letter-spacing: -0.06rem;
      margin: 0.24rem 0 0 0;
    }
    &:nth-of-type(1) {
      margin-left: 0;
    }
  }  
}
</style>
