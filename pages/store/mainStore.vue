<template>
  <div>
    <button @click="pop">팝업온</button>
    <BottomPopup v-if="popupOn">
      <div>테스트ㅇㅇㅇㅇㅇㅇ</div>
    </BottomPopup>
  </div>
</template>

<script>
export default {
  name: "MainStore",
  data() {
    return {
      popupOn: false,
    }
  },
  methods: {
    pop() {
      this.popupOn = true;
    }
  },
};
</script>

<style lang="scss" scoped></style>