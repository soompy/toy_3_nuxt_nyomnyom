<template>
  <div>
    <section class="user-box px-5 py-5">
      <ProfilePhoto />
      <UserInfo :userInfo="user" />
    </section>

    <section class="user-contents">
      <Title :text="'오늘의 메뉴'" />
      <PostListCard />

      <Title :text="'스토어'" />
      <MenuCard />
    </section>
  </div>
</template>

<script>
import ProfilePhoto from "../../components/profile/ProfilePhoto.vue";
import UserInfo from "../../components/profile/UserInfo.vue";
import MenuCard from "../../components/widgets/card/MenuCard.vue";
import Title from "../../components/Title.vue";
import PostListCard from "../../components/widgets/card/PostListCard.vue";

export default {
  components: { ProfilePhoto, UserInfo, PostListCard, Title, MenuCard },
  name: "PageMypage",
  data() {
    return {      
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
