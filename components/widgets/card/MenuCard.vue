<template>
  <div class="menu-card">
    <div class="card-item" v-for="(item, index) in menuItems" :key="index">
      <i class="icon w-8 h-8" :class="item.iconClass"></i>
      <span class="item-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCard",
  data() {
    return {
      menuItems: [
        { name: "스타벅스", iconClass: "ic_starbucks" },
        { name: "케이크", iconClass: "ic_cake" },
        { name: "버거킹", iconClass: "ic_burgerking" },
        { name: "푸드판다", iconClass: "ic_foodpanda" },
        { name: "해피카우", iconClass: "ic_happycow" },
        { name: "맥도날드", iconClass: "ic_mcdonalds" },
        { name: "옥토퍼스", iconClass: "ic_testinglibrary" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-card {
  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  grid-gap: 0.5rem;
  padding: 0 20px;
  .card-item {
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.1rem;
    transition: all 0.7s linear;
    .icon {
      position: relative;
      margin: auto;    
    }
    .item-name {
      font-size: 0.8rem;
      text-align: center;
      line-height: initial;
      margin-top: 0.8rem;
    }
  }
}
</style>