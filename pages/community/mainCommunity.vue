<template>
  <div class="community-wrapper">
    <SliderTab />

    <button class="btn chat" @click="openChat">
      뇸뇸톡 시작
    </button>

    <section class="chat-wrapper" v-if="showChat">
      <button class="btn back w-10 h-10" @click="closeChat">
        <i class="icon ic_back w-6 h-6"></i>
      </button>
      <Chat class="chat-box" :messages="messages" @send="sendMessage"></Chat>
    </section>

    <div class="food-community">
      <PostListCard :listItems="customListItems" />
    </div>
  </div>
</template>

<script>
import SliderTab from "../../components/widgets/list/sliderTab.vue";
import Chat from "../../layouts/chat.vue";
import PostListCard from "../../components/widgets/card/PostListCard.vue";

export default {
  name: "MainCommunity",
  components: {
    Chat,
    SliderTab,
    PostListCard,
  },
  data() {
    return {
      showChat: false,
      customListItems: [        
        {
          title: "금가루 시즈닝이 뿌려진 감자튀김 도전하기",
          text: "색다른 감자튀김을 좋아하는 사람들은 여기로 모이세요!!",
          image: "photo_2_1_11zon.png",
        },
        {
          title: "마라맛 치킨 도전하기",
          text: "마라의 맛과 치킨 좋아하는 사람들은 여기로 모이세요!!",
          image: "photo_3_2_11zon.png",
        },
        {
          title: "피자, 햄버거, 핫도그에 어울리는 소스는?",
          text: "이 조합 나만 알고 있긴 아깝다! 최상의 맛을 찾는 사람들",
          image: "photo_4_3_11zon.png",
        },
      ],
      messages: [],
    };
  },
  methods: {
    openChat() {
      this.showChat = true;
    },
    sendMessage(message) {
      this.messages.push({ text: message, self: true });
    },
    closeChat() {
      this.showChat = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.community-wrapper {
  position: relative;
  width: 100%;
}

.btn.chat {
  position: fixed;
  bottom: 5rem;
  right: 20px;
  z-index: 5;  
  font-size: 0.8rem;
  line-height: 1.4;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
}

.chat-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  .btn.back {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    align-content: center;
    justify-content: center;
    background: #e1f5fe;
    .icon {
      margin: auto;
    }
  }

  .chat-box {
    position: relative;
    top: 40px;
    left: 0;
    width: 100%;
  }
}
.food-community {
  overflow: visible;
}
</style>
