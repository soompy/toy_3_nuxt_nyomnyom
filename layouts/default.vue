<template>
  <div>
    <PageHeader :pageTitle="{ title: '' }" />
    <nuxt />
  </div>
</template>

<script>
import PageHeader from "../components/Header/PageHeader.vue";

export default {
  components: {
    PageHeader,
  },

};
</script>

<style></style>
