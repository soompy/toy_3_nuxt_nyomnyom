<template>
  <div class="hamburger-menu">
    <button class="hamburger-button" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div v-if="menuOpen" class="menu">
      <router-link to="/login/registerMembers">회원가입</router-link>
      <router-link to="/login/loginPage">로그인</router-link>
      <router-link to="/community/mainCommunity">커뮤니티</router-link>
      <router-link to="/join/join">조인</router-link>
      <router-link to="/mypage/pageMypage">마이페이지</router-link>

      <router-link to="/search/searchPage">검색</router-link>
      <router-link to="/media/mediaContents">미디어 콘텐츠</router-link>
      <router-link to="/">위젯</router-link>
      <router-link to="/">대시보드</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
