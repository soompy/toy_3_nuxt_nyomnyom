<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      {{ message }}
    </div>
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type your message..."
    />
    DD
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push(this.newMessage);
        this.newMessage = "";
      }
    },
  },
};
</script>
