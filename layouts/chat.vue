<template>
  <div>    
    <div class="chat-window">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', { self: message.self }]"
      >
        {{ message.text }}
      </div>
    </div>
    <div class="chat-typing">
      <input
        class="chat-input"
        v-model="inputMessage"
        @keyup.enter="sendMessage"
        placeholder="메세지를 입력하세요."
      />
      <button class="btn send" @click="sendMessage">전송</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      inputMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.inputMessage.trim() !== "") {
        this.$emit("send", this.inputMessage);
        this.inputMessage = "";
      }
    },    
  },
};
</script>

<style lang="scss" scoped>
.chat-window {
  overflow-y: scroll;
  padding: 20px;
  height: 80vh;
  .message {
    margin: 26px 0;
    padding: 8px 12px;
    border-radius: 14px;
  }
}

.self {
  position: relative;
  background-color: #ffffff;
  align-self: flex-end;
  &:after {
    position: absolute;
    right: 6%;
    top: 100%;
    display: block;
    clear: both;
    content: '';
    border-top: 15px solid #ffffff;
    border-left: 15px solid transparent;
  }
}

.chat-typing {
  display: flex;
  align-content: center;
  height: calc(20vh - 40px);
  .chat-input {
    width: 80%;
    height: 100%;    
    padding: 0 20px;
  }
  .btn.send {
    width: 20%;
    height: 100%;    
  }
}
</style>
