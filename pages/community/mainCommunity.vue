<template>
  <div class="community-wrapper">
    <section class="interests-tab">
      <strong>관심사</strong>
      <InterestsList />            
    </section>    

    <InterestsCard />

    <button class="btn chat">
      뇸뇸톡 <br /> 시작
    </button>

    <section class="chat-wrapper">
      <Chat></Chat>
    </section>
  </div>
</template>

<script>
import InterestsCard from '../../components/widgets/card/InterestsCard.vue';
import InterestsList from "../../components/widgets/list/interestsList.vue";
import Chat from "../../layouts/chat.vue";

export default {
  name: "MainCommunity",
  components: {
    Chat,
    InterestsList,
    InterestsCard,
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

.interests-tab {
  display: flex;
  align-items: center;
  padding: 20px;
  strong {
    flex-shrink: 0;
    font-size: 13px;    
    padding-right: 10px;
  }
}

.chat-wrapper {
  display: none;
}
</style>
