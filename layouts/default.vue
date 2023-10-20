<template>
  <div class="wrapper">
    <PageHeader :pageTitle="pageTitle" />
    <nuxt class="contents-box" />
    <BottomNavigator />
  </div>
</template>

<script>
import PageHeader from "../components/Header/PageHeader.vue";
import BottomNavigator from "../components/bottomNavigator.vue";

export default {
  components: {
    PageHeader,
    BottomNavigator,
  },
  computed: {
    pageTitle() {
      switch (this.$route.name) {
        case "media-mediaContents":
          return "쿡 스토리";
        case "community-mainCommunity":
          return "커뮤니티";
        case "join-join":
          return "조인";
        case "mypage-pageMypage":
          return "마이페이지";
        default:
          return "뇸뇸 그라운드";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;  
  .contents-box {
    overflow-y: auto;
    top: 0;
    height: calc(100vh - 130px);    
  }
}
</style>
