<template>
  <div class="hamburger-menu">
    <button class="hamburger-button" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div v-if="menuOpen" class="menu">
      <button class="btn-close w-5 h-5" @click="closeMenu">
        <i class="icon ic_close black"></i>
      </button>    
      
      <div class="user-box">
        <router-link to="/login/loginPage">로그인</router-link>
        <router-link to="/login/registerMembers">회원가입</router-link>        
      </div>  
      
      <ul class="gnb">
        <li>
          <router-link to="/community/mainCommunity">커뮤니티</router-link>          
        </li>
        <li>
          <router-link to="/join/join">조인</router-link>          
        </li>
        <li>
          <router-link to="/media/mediaContents">쿡 스토리</router-link>              
        </li>
        <li>
          <router-link to="/mypage/pageMypage">마이페이지</router-link>            
        </li>          
      </ul>                
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
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
