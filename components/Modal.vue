<template>
  <div class="modal-overlay">
    <div class="dim" @click="closeModal"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
