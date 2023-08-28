<template>
  <button
    :style="{
      width: width === 'full' ? '100%' : width + 'px',
      height: height + 'px',
      backgroundColor: backgroundColor,
      color: textColor,
    }"
    @click="handleClick"
    :disabled="!isEnabled"
  >
    {{ label }}
  </button>
</template>
  
<script>
export default {
  name: 'ButtonCp',
  props: {
    label: String,
    width: {
      type: Number,      
    },
    height: {
      type: Number,
      default: 40,
    },
    backgroundColor: {
      type: String,      
    },
    textColor: {
      type: String,      
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      if (this.isEnabled) {
        this.$emit('click');
      }
    },
  },
};
</script>