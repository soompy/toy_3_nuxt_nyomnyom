<template>
  <div>
    <PageHeader :pageHeaderTitle="pageTitle" />
    <nuxt />
  </div>
</template>

<script>
import PageHeader from "../components/Header/PageHeader.vue";

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      pageTitle: "",
    };
  },
};
</script>

<style></style>
