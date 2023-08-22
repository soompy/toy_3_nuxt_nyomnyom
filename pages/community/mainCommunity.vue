<template>
  <div class="community-wrapper">
    <SliderTab />

    <button class="btn chat" @click="openChat">
      뇸뇸톡 <br />
      시작
    </button>

    <section class="chat-wrapper" v-if="showChat">
      <button class="btn back w-10 h-10" @click="closeChat">
        <i class="icon ic_back w-6 h-6"></i>
      </button>
      <Chat class="chat-box" :messages="messages" @send="sendMessage"></Chat>
    </section>
  </div>
</template>

<script>
import SliderTab from "../../components/widgets/list/sliderTab.vue";
import Chat from "../../layouts/chat.vue";
import io from "socket.io-client";

export default {
  name: "MainCommunity",
  components: {
    Chat,
    SliderTab,
  },
  data() {
    return {
      showChat: false,
      messages: [],
      socket: null,
    };
  },
  methods: {
    openChat() {
      this.showChat = true;
    },
    sendMessage(message) {
      this.socket.emit("chat message", message);
      this.messages.push({ text: message, self: true });
    },
    closeChat() {
      this.showChat = false;
    },
  },
  mounted() {
    this.socket = io("http://localhost:3000");
    this.socket.on("chat message", (message) => {
      this.messages.push(message);
    });
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
</style>
