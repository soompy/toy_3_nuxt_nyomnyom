<template>
  <div class="bottom-popup-overlay" @click="$emit('close')">
    <div class="modal-content">
      <button class="close-popup w-5 h-5" @click="hidePopup">
        <i class="icon ic_close black"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomPopup",
  methods: {
    hidePopup() {
      this.showModal = false;
    },
  },
};
</script>
