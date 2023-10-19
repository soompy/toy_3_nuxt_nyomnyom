<!-- Please remove this file from your project -->
<template>
  <div class="app-container">    
    <!-- <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" /> -->

    <section class="media-play">
      <div class="top-box">
        <p>
          1초도 놓칠 수 없바옹 <br>
          오늘은 또 어떤 귀여운 바오가!!
        </p>
      </div>
      <div class="best-play-container">
        <div class="best-play-box">
          <YoutubeFrame :video-id="videoId" />
        </div>
      </div>
    </section>
    
    <SliderTab />

    <div class="food-community">
      <PostListCard :listItems="customListItems" />
    </div>
    

    <router-link to="/mypage/pageNotice">공지사항</router-link>

    <h3>페이지모음</h3>
    <div class="sm:px-5 sm:py-5 md:px-6 md:py-6">
      <router-link to="/login/loginPage">로그인</router-link>
      <router-link to="/community/mainCommunity">커뮤니티</router-link>
      <router-link to="/join/join">조인</router-link>
      <router-link to="/mypage/pageMypage">마이페이지</router-link>
      
      <router-link to="/search/searchPage">검색</router-link>
      <router-link to="/store/mainStore">스토어</router-link>
      <router-link to="/">위젯</router-link>
      <router-link to="/">대시보드</router-link>     
    </div>
  </div>
</template>

<script>
import PostListCard from "./widgets/card/PostListCard.vue";
import YoutubeFrame from "./widgets/card/youtubeFrame.vue";
import Login from "./widgets/form/LoginForm.vue";
import SliderTab from "./widgets/list/sliderTab.vue";

export default {
  name: "NuxtTutorial",
  data() {
    return {
      videoId: "KRDH7IJ-P14?si=7yNa1BkltIaBIdTU&amp",
      customListItems: [
        {
          title: "세계에서 패티가 제일 두꺼운 햄버거 도전하기",
          text: "패티에 진심인, 햄버거를 좋아하는 사람들은 여기로 모이세요!!",
          image: "photo_1_11zon.png",
        },
        {
          title: "금가루 시즈닝이 뿌려진 감자튀김 도전하기",
          text: "색다른 감자튀김을 좋아하는 사람들은 여기로 모이세요!!",
          image: "photo_2_1_11zon.png",
        },
        {
          title: "마라맛 치킨 도전하기",
          text: "마라소스와 치킨 좋아하는 사람들은 여기로 모이세요!!",
          image: "photo_3_2_11zon.png",
        },
      ],
    };
  },
  components: { PostListCard, Login, SliderTab, YoutubeFrame },
  build: {
    css: ["@/assets/main.css"],
  },
};
</script>

<style lang="scss" scoped>
.food-community {
  overflow: visible;
}
</style>
