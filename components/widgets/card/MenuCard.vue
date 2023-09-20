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
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 8px;
  .card-item {
    display: flex;
    flex-direction: column;
    padding: 10px;
    cursor: pointer;
    transition: all 0.7s linear;
    .icon {
      position: relative;
      margin: auto;
      &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: -1;
        transform: translate(-50%, -50%);
        display: block;
        clear: both;
        content: "";
        width: 150%;
        height: 150%;
        background-color: #e1f5fe;
        border-radius: 10px;
        background-color: #e1f5fe;
      }
    }
    .item-name {
      font-size: 0.8rem;
      font-family: "Nanum Gothic", Nanum Gothic, HelveticaNeue-Light,
        AppleSDGothicNeo-Light, sans-serif;
      text-align: center;
      line-height: initial;
      margin-top: 14px;
    }
  }
}
</style>
