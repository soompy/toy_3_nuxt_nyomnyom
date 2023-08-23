<template>
  <div>
    <PageHeader :pageTitle="pageTitle" />
    <nuxt />
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
        case "store-mainStore":
          return "스토어";
        case "community-mainCommunity":
          return "커뮤니티";
        case "join-join":
          return "조인";
        case "mypage-pageMypage":
          return "마이페이지";
        default:
          return "뇸뇸 당근밭";
      }
    },
  },
};
</script>

<style></style>
