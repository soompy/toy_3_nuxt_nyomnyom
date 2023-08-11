<template>
    <div>
      <input type="color" v-model="selectedColor" @input="handleColorChange" />
      <div :style="{ backgroundColor: selectedColor, width: '50px', height: '50px' }"></div>
    </div>
</template>
  
<script>
export default {
  name: 'ColorPicker',
  data() {
    return {
      selectedColor: '#000000',
    };
  },
  methods: {
    handleColorChange() {
      this.$emit('color-change', this.selectedColor);
    },
  },
};
</script>
  
<style scoped>
</style>