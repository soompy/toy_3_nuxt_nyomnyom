<template>
  <div>
    <SliderComponent v-if="handleTabClick === index" :items="sliderItems" />
  </div>
</template>

<script>
import SliderComponent from "../../slider/SliderComponent.vue";

export default {
  name: "InterestsCard",
  components: {
    SliderComponent,
  },
  data() {
    return {
      sliderItems: [
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
};
</script>
