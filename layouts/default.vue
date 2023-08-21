<template>
  <div>
    <PageHeader />
    <nuxt />
    <BottomNavigator />
  </div>
</template>

<script>
import PageHeader from "../components/Header/PageHeader.vue";
import BottomNavigator from "../components/bottomNavigator.vue"

export default {
  components: {
    PageHeader,
    BottomNavigator,
  },
};
</script>

<style></style>
