<template>
  <h2>{{ text }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1.1rem;
  font-weight: bold;
  padding-left: 20px;
  margin: 1rem 0;
}
</style>
