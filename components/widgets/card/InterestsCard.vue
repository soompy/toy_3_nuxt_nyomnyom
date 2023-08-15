<template>
  <div>
    슬라이드ui
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sliderItems: [
        {
          image: "/assets/images/interest_00.png",
          title: "Slide 1",
          description: "Description for Slide 1",
        },
        {
          image: "/assets/images/interest_01.png",
          title: "Slide 2",
          description: "Description for Slide 2",
        },
        // 필요한 만큼 슬라이드 항목을 추가
      ],
    };
  },
};
</script>
