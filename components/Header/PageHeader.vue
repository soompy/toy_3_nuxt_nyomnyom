<template>
  <header class="header">
    <Logo class="w-12 h-12" />
    <p class="page-title">{{ pageTitle }}</p>
    <MenuBar />
  </header>
</template>

<script>
import Logo from "../../components/Logo.vue";
import MenuBar from './MenuBar.vue';

export default {
  name: "PageHeader",
  props: {
    pageTitle: String,
  },
  components: {
    Logo,
    MenuBar,
  },
};
</script>

<style lang="scss" scoped>

</style>
