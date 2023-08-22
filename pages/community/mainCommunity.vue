<template>
  <div class="community-wrapper">
    <SliderTab />

    <button class="btn chat" @click="openChat">
      뇸뇸톡 <br />
      시작
    </button>

    <section class="chat-wrapper" v-if="showChat">
      <Chat></Chat>
    </section>
  </div>
</template>

<script>
import SliderTab from '../../components/widgets/list/sliderTab.vue';
import Chat from "../../layouts/chat.vue";

export default {
  name: "MainCommunity",
  components: {
    Chat,
    SliderTab,
  },
  data() {
    return {
      showChat: false,
    }
  },
  methods: {
    openChat() {
      this.showChat = true;
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
  bottom: 60px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 12px;
  line-height: 1.4;
  font-weight: bold;
  border-radius: 50%;
}

.chat-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
