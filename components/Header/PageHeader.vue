<template>
  <header class="header">
    <Logo class="w-14 h-14" />
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
.header {
  position: sticky !important;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 6px 20px;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
  .page-title {
    font-size: 17px;
    font-weight: 500;   
    margin-left: -32px;
  }
}
</style>
