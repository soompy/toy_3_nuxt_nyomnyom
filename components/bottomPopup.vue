<template>
  <div class="bottom-popup-overlay" @close="closePopup">
    <div class="dim" @click="closePopup"></div>
    <div class="modal-content">
      <button class="close-popup w-5 h-5" @click="closePopup">
        <i class="icon ic_close black"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomPopup",
  data() {
    return {};
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>
