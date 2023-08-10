<template>
  <div>
    <section class="user-box px-5 py-5">
      <ProfilePhoto />
      <UserInfo :userInfo="user" />
    </section>

    <section class="user-contents">
      <h2>제목</h2>
      <PostListCard />

      <h2>제목</h2>
      <MenuCard />
    </section>
  </div>
</template>

<script>
import ProfilePhoto from "../../components/profile/ProfilePhoto.vue";
import UserInfo from "../../components/profile/UserInfo.vue";
import MenuCard from "../../components/widgets/card/MenuCard.vue";
import PostListCard from "../../components/widgets/card/PostListCard.vue";

export default {
  components: { ProfilePhoto, UserInfo, PostListCard, MenuCard },
  PostListCarde: "PageMypage",
  data() {
    return {
      pageTitle: {
        title: "마이페이지",
      },
      user: {
        name: "김유저",
        level: "Lv.13",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.user-box {
  display: flex;
  align-content: center;
  position: relative;
  width: 100%;
}
</style>
