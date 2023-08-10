<template>
  <div>
    <div class="user-box px-5 py-5">
      <ProfilePhoto />
      <UserInfo :userInfo="user" />
    </div>
  </div>
</template>

<script>
import ProfilePhoto from "../../components/profile/ProfilePhoto.vue";
import UserInfo from "../../components/profile/UserInfo.vue";

export default {
  components: { ProfilePhoto, UserInfo },
  name: "PageMypage",
  data() {
    return {
      pageTitle: "마이페이지",
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
