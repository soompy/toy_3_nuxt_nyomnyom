<template>
  <div class="community-wrapper">
    <SliderTab />

    <button class="btn chat">
      뇸뇸톡 <br />
      시작
    </button>

    <section class="chat-wrapper">
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
  display: none;
}
</style>
