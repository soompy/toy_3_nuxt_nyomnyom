<template>
  <header class="header">
    <Logo class="w-14 h-14" />
    <p class="page-title">{{ pageTitle }}</p>
  </header>
</template>

<script>
import Logo from "../../components/Logo.vue";

export default {
  name: "PageHeader",
  props: {
    pageTitle: String,
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 6px 10px;
  border-bottom: 1px solid #eeeeee;
  .page-title {
    font-size: 17px;
    font-weight: 500;
    margin-left: 20px;
  }
}
</style>
