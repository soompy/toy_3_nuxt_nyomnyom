<template>
  <div class="py-6">
    <section class="user-box px-3 pb-3">
      <ProfilePhoto :profile="user" />
      <UserInfo :userInfo="user" />
    </section>

    <Tab />

    <section class="user-contents">      
      <Title :text="'스토어'" />
      <MenuCard />
    </section>
  </div>
</template>

<script>
import ProfilePhoto from "../../components/profile/ProfilePhoto.vue";
import UserInfo from "../../components/profile/UserInfo.vue";
import Tab from "../../components/tab/Tab.vue";
import MenuCard from "../../components/widgets/card/MenuCard.vue";
import Title from "../../components/Title.vue";

export default {
  components: { ProfilePhoto, UserInfo, Title, MenuCard, Tab },
  name: "PageMypage",
  data() {
    return {
      user: {
        name: "아이바오",
        level: "Lv.13",
        image: "panda_ai_00.webp",
      },           
    };
  },  
};
</script>

<style lang="scss" scoped>

</style>
