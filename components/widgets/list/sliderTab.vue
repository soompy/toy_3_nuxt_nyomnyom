<template>
  <div class="slider-container">
    <section class="interests-tab">
      <strong>관심사</strong>
      <InterestsList @tabClicked="handleTabClick" />
    </section>

    <!-- <SliderComponent
      v-for="(card, idx) in cards"
      :key="idx"
      v-if="selectedTabIndex === idx"
      :cards="card"
      :items="items"
    /> -->

    <SliderComponent v-for="(card, idx) in cards" :key="idx" v-if="selectedTabIndex === idx" :cards="card" :items="items" />

  </div>
</template>

<script>
import SliderComponent from "../../slider/SliderComponent.vue";
import InterestsList from "./interestsList.vue";

export default {
  name: "SliderTab",
  props: {
    interests: Array,
  },
  components: {
    SliderComponent,
    InterestsList,
  },
  data() {
    return {
      selectedTabIndex: 0,
      cards: [
        [{ top: "1번" },],
        [{ top: "2번" },],
        [{ top: "3번" },],
        [{ top: "4번" },],
        [{ top: "5번" },],
        [{ top: "6번" },],        
      ],
      items: [
        {
          photo: "panda_00",
          name: "관심사1",
          title: "Slide 1",
          description:
            "숨막히게 귀엽고 깜찍한 우주최강 킹갓 아기판다 푸바오의 원픽 판다 빵",
        },
        {
          photo: "panda_01",
          name: "관심사2",
          title: "Slide 2",
          description:
            "숨막히게 귀엽고 깜찍한 우주최강 킹갓 아기판다 푸바오의 원픽 판다 빵",
        },
      ],
    };
  },
  methods: {
    handleTabClick(index) {
      this.selectedTabIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.interests-tab {
  display: flex;
  align-items: center;
  padding: 20px 0 20px 20px;
  strong {
    flex-shrink: 0;
    font-size: 13px;
    padding-right: 10px;
  }
}
</style>
