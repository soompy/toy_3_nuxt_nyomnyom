<template>
  <div class="py-6">
    <section class="user-box px-3 pb-3">
      <ProfilePhoto :profile="user" />
      <UserInfo :userInfo="user" />
    </section>

    <Tab />

    <section class="user-contents">
      <Title :text="'자주 묻는 질문'" />
      <PostListCard :listItems="customListItems" />

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
import PostListCard from "../../components/widgets/card/PostListCard.vue";

export default {
  components: { ProfilePhoto, UserInfo, PostListCard, Title, MenuCard, Tab },
  name: "PageMypage",
  data() {
    return {
      user: {
        name: "아이바오",
        level: "Lv.13",
        image: "panda_ai_00.webp",
      },      
      customListItems: [
        {
          title: "아이바오에게 당근 선물을 주는 방법은?",
          text:
            "사랑스러운 아이바오에게 당근을 주려면 먼저 아이바오 당근샵 멤버십에 가입을 해주세요.",
          image: "panda/panda_ai_00.webp",
        },
        {
          title: "푸바오가 가장 좋아하는 장난감은?",
          text: "우리 푸바오는 할부지가 만들어주신 댓잎 장화를 제일 좋아해요!",
          image: "panda/panda_aifu_00.webp",
        },
        {
          title: "러바오를 알아 볼 수 있는 특징은 무엇인가요?",
          text: "원조 귀요미 러바오의 등에는 V자 모양의 띠가 있어요!",
          image: "panda/panda_le_00.webp",
        },
      ],
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
