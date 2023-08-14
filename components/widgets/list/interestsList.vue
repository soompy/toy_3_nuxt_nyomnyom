<template>
  <ul class="interests-list">
    <li class="interests-item" v-for="(interests, index) in interestsItem" :key="index">
      <span class="image"
        ><img
          :src="require(`/assets/images/${interests.image}.png`)"
          :alt="interests.title"
      /></span>
      <p class="interests-name">{{ interests.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "InterestsList",
  data() {
    return {
      interestsItem: [
        { image: "interest_00", title: "햄버거" },
        { image: "interest_01", title: "샌드위치" },
        { image: "interest_02", title: "타코" },
        { image: "interest_03", title: "핫도그" },
        { image: "interest_04", title: "조각피자" },
        { image: "interest_05", title: "피자" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.interests-list {
  overflow-x: auto;
  display: flex;
  align-items: center;
  .interests-item {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 8px;
    .image {
      overflow: hidden;
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;      
    }
    .interests-name {
      font-size: 12px;
      text-align: center;
      margin-top: 4px;
    }
  }
}
</style>
